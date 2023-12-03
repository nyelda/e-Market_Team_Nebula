import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const backendUrl = Constants.expoConfig.extra.REACT_APP_BACKEND_URL;

export default function Input({ onSignInPress, navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInPress = async () => {
    if (!username || !password) {
      console.error('Username and password are required');
      return;
    }
  
    try {
      const isEmail = username.includes('@');
      const payload = isEmail ? { email: username } : { username };
      payload.password = password;

      const response = await axios.post(`${backendUrl}/sign-in`, payload);
      console.log('Login Response:', response.data);
  
      if (response.data && response.data.success) {
        console.log('Login successful');
        
        // Store the token in AsyncStorage
        const token = response.data.token;
        await AsyncStorage.setItem('token', token);
        console.log('Token saved to AsyncStorage:', token);

        onSignInPress({ identifier: username, password }, navigation);
      } else {
        alert('Error during login: ' + response.data.message);
        console.error('Error during login:', response.data.message);
      }
    } catch (error) {
      // Handle other errors (network issues, server errors, etc.)
      alert('Error during login: ' + error.message);
      console.error('Error during login:', error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.inputGroup}>
      <View style={styles.container}>
        <Text style={styles.textColor}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textColor}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleSignInPress}
      >
        <Text style={styles.createButtonText}>Log In</Text>
      </TouchableOpacity>
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
