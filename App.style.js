import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242D34',
      },
      turn:{
        width:'80%',
        top:100,
        left:50,
        zIndex:2,
      },
      turnText:{
        color:"white",
        fontSize:32,
        position:'absolute'
      },
      bg:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
      },
      map:{

        width:"80%",
        aspectRatio:1,
      },
      row:{
        flex:1,
        flexDirection:"row",
      },
      cell:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      },
      circle:{
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
        width:50,
        height:50,
      },
      crossLine:{
        left:25,
        position:'absolute',
        width:5,
        height:50,
        backgroundColor:"white",
        borderRadius:10,
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