import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import BgImage from './assets/bg.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.bg}>

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:{
    width:'100%',
    height:'100%'
  }
});
