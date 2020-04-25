import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import LazyImage from './LazyImage'

export default Post = ({ data, shouldLoad }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: data.author.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>{data.author.name}</Text>
            </View>

            <LazyImage 
            fullImage={data.image}
            smallImage={data.small}
            aspectRatio={data.aspectRatio}
            shouldLoad={shouldLoad}
            />
           

            <View style={styles.footer}>
                <Text style={styles.name}>{data.author.name}: </Text>
                <Text style={styles.description}>{data.description}</Text>
            </View>
           
        </View>
    )
}

