import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
export default function Info() {
    return (
      <View style={styles.but}>
        <Text style={styles.style1}>Forgot Password?</Text>
        <Text style={styles.style2}>New Here? Create an Account</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  but: {
    paddingBottom: 50,
  },
  style1: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    color: '#EFD02C',
    textDecorationLine: 'underline',
  },
  style2: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#EFD02C',
    textDecorationLine: 'underline',
  },
});