import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

const backendUrl = Constants.expoConfig.extra.REACT_APP_BACKEND_URL;

export default function CodeVerification({ navigation, route }) {
  const { email } = route.params;
  const [enteredCode, setEnteredCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerifyCode = async () => {
    try {
      setLoading(true);
  
      const response = await axios.post(`${backendUrl}/verify-code`, { email, code: Number(enteredCode) });
  
      console.log('Verification Response:', response);
  
      if (response.data.success) {
        navigation.navigate('Reset Password', { email });
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } catch (error) {
      
      console.error('Verification Error:', error);
      setError('An error occurred. Please try again.'); 
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify Your Code</Text>
      <Text style={styles.text1}>Enter the verification code sent to your email.</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Verification Code</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEnteredCode(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleVerifyCode}
      >
        <Text style={styles.createButtonText}>Verify</Text>
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
  
