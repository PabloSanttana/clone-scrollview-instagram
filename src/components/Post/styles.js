import { StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        marginTop: 10,
    },
    header:{
        padding:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    avatar:{
        width:32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
    },
    name:{
            color:'#333',
            fontWeight:'bold'
    },
    postImage:{
        width:'100%'
    },
    footer:{
        flexDirection: 'row',
        padding:15,
        lineHeight: 18,
    },
    description:{

    }
})