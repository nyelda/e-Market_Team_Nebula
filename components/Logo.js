import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.innerContainer}>
      <Image
        source={require('../assets/TSe-Market LOGO FINAL.png')}  
        style={styles.img}/>    
    </View>
  )
}

const styles = StyleSheet.create({
    innerContainer: {
      padding: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: 200, 
      height: 200,
    },
});