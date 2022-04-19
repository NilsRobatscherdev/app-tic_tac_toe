import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import BgImage from './assets/bg.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.bg} resizeMode="contain">
        <View style={styles.circle}></View>
        <View style={styles.cross}>
          <View style={styles.crossLine}></View>
          <View style={[ styles.crossLine, styles.crossLineReversed]}></View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    width:10,
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
