import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

const backendUrl = Constants.expoConfig.extra.REACT_APP_BACKEND_URL;

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSendCode = async () => {
    try {
      const response = await axios.post(`${backendUrl}/send-code`, { email });
  
      if (response.data.success) {
        console.log('Verification code sent successfully');
        navigation.navigate('Code Verification', { email });
      } else {
        console.error('Error sending verification code:', response.data.message);
        Alert.alert('Error', 'Failed to send verification code.');
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      Alert.alert('Error', 'Failed to send verification code.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Did you forget your password?</Text>
      <Text style={styles.text1}>Enter your email and wait for the verification code</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleSendCode}
      >
        <Text style={styles.createButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EFD02C',
    marginBottom: 10,
  },
  text1: {
    fontSize: 17,
    color: '#EFD02C',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#EFD02C',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderColor: '#EFD02C',
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 5,
    color: '#EFD02C',
  },
  createButton: {
    backgroundColor: '#EFD02C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#545F71',
  },
});
