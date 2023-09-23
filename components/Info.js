import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
export default function Info() {
    return (
      <View style={styles.but}>
        <Button color='#EFD02C' title='Login'/>
        <Text style={styles.style1}>Forgot Password?</Text>
        <Text style={styles.style2}>New Here? Create an Account</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  but: {
    paddingBottom: '50',
  },
  style1: {
    fontSize: 15,
    textAlign: 'center',
    margin: 7,
    fontWeight: 'normal',
    color: '#EFD02C',
    textDecorationLine: 'underline',
  },
  style2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    fontWeight: 'normal',
    color: '#EFD02C',
    paddingBottom: 10,
    textDecorationLine: 'underline',
  },
})
