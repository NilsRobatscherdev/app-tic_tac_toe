import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, View, ImageBackground } from 'react-native';

import styles from './App.style'

import BgImage from './assets/bg.jpeg'
import { Alert } from 'react-native-web';

export default function App() {
  const [map,setMap] = useState([
    ['','',''], // first
    ['','',''], // second
    ['','','']  // third
  ]);

  const [currentTurn, setCurrentTurn] = useState('x');

  const onPress = (rowIndex,columnIndex) => {
    if(map[rowIndex][columnIndex] !== ""){
      console.warn("This is already occupied")
      return;
    }
    setMap((existingMap) => {
      const updatedMap = [...existingMap]
      updatedMap[rowIndex][columnIndex] = currentTurn;
      return updatedMap;
    });
    // switching of turns
    setCurrentTurn(currentTurn === 'x' ? 'o' : "x" )
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>
          {
            map.map((row, rowIndex)=> (
              <View style={styles.row}>
                {row.map((cell, columnIndex) => (
                  <Pressable onPress={() => onPress(rowIndex,columnIndex)} style={styles.cell}>
                    {cell === "o" && <View style={styles.circle}></View>}
                    {cell === "x" && (
                      <View style={styles.cross}>
                        <View style={styles.crossLine}></View>
                        <View style={[ styles.crossLine, styles.crossLineReversed]}></View>
                      </View>
                    )}
                  </Pressable>
                ))}
              </View>
            ))
          }
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

