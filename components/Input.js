import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';

export default function Input() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.inputGroup}>
      <View style={styles.container}>
        <Text style={styles.textColor}>Email/Username</Text>
        <TextInput style={styles.input} placeholder="Email/Username" />
      </View>
      <View style={styles.container}>
        <Text style={styles.textColor}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  input: {
    padding: 10,
    borderColor: '#EFD02C',
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 10,
    fontStyle: 'italic',
    width: 300,
    color: '#EFD02C',
  },
  container: {
    width: '100%',
    padding: 10,
  },
  textColor: {
    color: '#EFD02C',
    marginBottom: 5,
  },
});
