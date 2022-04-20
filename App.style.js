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

        width:"80%",
        aspectRatio:1,
      },
      row:{
        flex:1,
        flexDirection:"row",
      },
      cell:{
        flex:1,
        borderColor:"red",
        borderWidth:1,
      },
      circle:{
        position:'absolute',
        left:0,
        top:0,
        width:50,
        height:50,
        backgroundColor:'#242D34',
        borderRadius:25,
        borderWidth:5,
        borderColor:'white'
      },
      cross:{
        position:'absolute',
        width:50,
        height:50,
      },
      crossLine:{
        left:25,
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