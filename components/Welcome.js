import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View>
      <Text style={styles.wel}>WELCOME!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wel: {
      fontSize: 40,
      textAlign: 'center',
      margin: 7,
      fontWeight: 'bold',
      color: '#EFD02C',
      paddingTop: 50,
    },
})