import React,{useState, useEffect, useCallback} from 'react'
import {Text, View, FlatList, ActivityIndicator } from 'react-native'

import styles from './styles'
import api from '../../services/api'
import Post from '../../components/Post'

export default function Home(){
    const [feeds, setFeeds] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [ loading, setLoading ] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [viewable, setViewable] = useState([])

    async function loadPage(pageNumber = page, shoulRefresh = false){

        if( total && pageNumber > total) return;

        setLoading(true)
        const response = await api.get(`feed?_expand=author&_limit=5&_page=${pageNumber}`)
        
        const totalItem =  response.headers["x-total-count"]
       
        setTotal( Math.floor(totalItem / 5))
        setFeeds(shoulRefresh ? response.data :  [...feeds, ...response.data])
        setPage(pageNumber + 1)

        setLoading(false)
    }


    useEffect(()=>{
        loadPage()
    },[])

    async function refreshList(){
        setRefreshing(true)

        await loadPage(1, true)

        setRefreshing(false)
    }

    const handleViewableChandeg = useCallback(({ changed })=>{
        setViewable(changed.map(({ item }) => item.id))
    },[])


    return (
       <View style={styles.container}>
           <FlatList
                data={feeds}

                onEndReached={()=>loadPage()}
                onEndReachedThreshold={0.1}

                onRefresh={refreshList}
                refreshing={refreshing}

                onViewableItemsChanged={handleViewableChandeg}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold:20}}

                ListFooterComponent={ loading && <ActivityIndicator size='small' color="#999" style={{marginVertical:30}}/>}

                keyExtractor={item => String(item.id)}
                renderItem={( {item} )=>(
                    <Post data={item} shouldLoad={viewable.includes(item.id)} />
                )}
           />
       </View>
    )
}
