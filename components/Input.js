import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'

export default function Input() {
  return (
    <KeyboardAvoidingView 
    style={styles.inputGroup}>
        <View style={styles.container}>
            <Text style={styles.textColor}> Email/Username </Text>
            <TextInput style={styles.input} placeholder="Email/Username" />
        </View>
        <View style={styles.container}>
            <Text style={styles.textColor}> Password </Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        </View>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
    inputGroup: {
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
        margin: 5,
    },
    input: {
        padding: 20,
        borderColor: '#EFD02C',
        borderWidth: 1,
        fontSize: 18,
        borderRadius: 10,
        fontStyle: 'italic',
        width: 'auto',
        height: 5,
        color: '#EFD02C',
    },
    container: {
        width: '100%',
        padding: 20,
    },
    textColor: {
        color: '#EFD02C',
        margin: 5,
    }
});