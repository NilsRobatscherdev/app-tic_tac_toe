import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, Pressable, View, ImageBackground } from 'react-native';

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

    checkWinningState();
  }

  const checkWinningState = () => {
    // Check rows
    for(let row = 0; row <3; row++){
        const isRowXWinning = map[row].every((cell) => cell === "x")
        const isRowOWinning = map[row].every((cell) => cell === "o")

        if(isRowXWinning){
          console.warn("X won. Row: ",row)
        }
        if(isRowOWinning){
          console.warn("O won. Row: ",row)
        }
    }
    // Check columns
    for(let col = 0; col < 3; col++){

      let isColumnXWinner = true;
      let isColumnOWinner = true;

      for(let row = 0; row <3; row++){
        if(map[row][col] !== 'x'){
          isColumnXWinner = false
        }
        if(map[row][col] !== 'o'){
          isColumnOWinner = false
        }
      }
      if(isColumnXWinner){
        console.warn("X won. Col: ",col)
      }
      if(isColumnOWinner){
        console.warn("O won. Col: ",col)
      }
    }
    // Check diagonals
    let isDiagonal1XWinning = true;
    let isDiagonal1OWinning = true;
    let isDiagonal2XWinning = true;
    let isDiagonal2OWinning = true;
    for(let i = 0; i < 3; i++){
      if(map[i][i] !== 'x'){
        isDiagonal1XWinning = false;
      }
      if(map[i][i] !== 'o'){
        isDiagonal1OWinning = false;
      }
      if(map[i][2 - i] !== 'x'){
        isDiagonal2XWinning = false;
      }
      if(map[i][2 - i] !== 'o'){
        isDiagonal2OWinning = false;
      }
    }

    if(isDiagonal1XWinning) {
      console.warn("X won. Col: 1")
    }
    if(isDiagonal1OWinning) {
      console.warn("O won. Col: 1")
    }
    if(isDiagonal2XWinning) {
      console.warn("X won. Col: 2")
    }
    if(isDiagonal2OWinning) {
      console.warn("O won. Col: 2")
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.turn}>
        <Text style={styles.turnText}>Current Turn: {currentTurn}</Text>
      </View>
      <ImageBackground source={BgImage} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>
          {
            map.map((row, rowIndex)=> (
              <View style={styles.row} key={`key-${rowIndex}`}>
                {row.map((cell, columnIndex) => (
                  <Pressable onPress={() => onPress(rowIndex,columnIndex)} key={`key-${rowIndex}-col-${columnIndex}`} style={styles.cell}>
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

