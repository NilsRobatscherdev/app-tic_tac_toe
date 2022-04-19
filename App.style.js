import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242D34',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bg:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
      },
      map:{
        borderWidth:1,
        borderColor:"white",
        width:"80%",
        aspectRatio:1,
      },
      circle:{
        width:50,
        height:50,
        backgroundColor:'#242D34',
        borderRadius:25,
        borderWidth:3,
        borderColor:'white'
      },
      crossLine:{
        position:'absolute',
        width:5,
        height:50,
        backgroundColor:"white",
        transform:[
          {
            rotate:'45deg'
          }
        ]
      },
      crossLineReversed:{
        transform:[
          {
            rotate:'-45deg'
          }
        ]
      }
});