import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import styles from './App.style'

import BgImage from './assets/bg.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>
          <View style={styles.circle}></View>
          <View style={styles.cross}>
            <View style={styles.crossLine}></View>
            <View style={[ styles.crossLine, styles.crossLineReversed]}></View>
          </View>
        </View>

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

