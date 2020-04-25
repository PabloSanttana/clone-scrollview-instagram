import React,{useEffect, useState} from 'react'
import {Animated, ImageBackground,} from 'react-native'

export default function LazyImage({fullImage,smallImage,aspectRatio, shouldLoad}){

    const opacity = new Animated.Value(0)
    const[ loaded, setLoaded ] = useState(false)

    useEffect(()=>{
        if( shouldLoad){
           // setTimeout(()=>{
                setLoaded(true)
          //  },500)
        }
    },[shouldLoad])


    function handleAnimate(){
        Animated.timing(opacity,{
            toValue:1,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    return (
        <ImageBackground   
            source={{uri:smallImage }} 
            style={[ {width:'100%'}, {aspectRatio}]} 
            resizeMode='contain' 
            blurRadius={0.4}>

          {loaded && <Animated.Image 
                source={{uri:fullImage }} 
                style={[ {width:'100%', opacity}, {aspectRatio}]} 
                resizeMode='contain' 
                onLoadEnd={handleAnimate}
                />
            }

        </ImageBackground>
    )
}


