import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Input from "./components/Input";
import Home from "./components/Home";
import CreateAcc from "./components/CreateAcc";
import SignIn from "./components/SignIn";
import ForgotPw from "./components/ForgotPw";
import CodeVerif from "./components/CodeVerif";
import ResetPw from "./components/ResetPw";
import React, { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome to TSe-Market!"
          component={HomeScreen}
          options={{
            headerTitle: 'TIPians Second-hand e-Market', 
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontSize: 23, 
              fontWeight: 'bold', 
              color: '#545F71', 
            },
            headerStyle: {
              backgroundColor: '#EFD02C', 
            },
            headerTintColor: '#545F71', 
          }}
        />
        <Stack.Screen name="Homepage" component={Home} 
        options={{
          headerTitle: 'TSe-Market Homepage', 
          headerTitleAlign: 'center', 
          headerTitleStyle: {
            fontSize: 24, 
            fontWeight: 'bold', 
            color: '#545F71', 
          },
          headerStyle: {
            backgroundColor: '#EFD02C', 
          },
          headerTintColor: '#545F71', 
          headerLeft: null,
        }}
        />
      <Stack.Screen
        name="Create Account"
        component={CreateAcc}
        options={{
          headerTitle: 'Create New Account', 
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#545F71',
          },
          headerStyle: {
            backgroundColor: '#EFD02C',
          },
          headerTintColor: '#545F71',
        }}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPw}
        options={{
          headerTitle: 'Forgot Password?', 
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#545F71',
          },
          headerStyle: {
            backgroundColor: '#EFD02C',
          },
          headerTintColor: '#545F71',
        }}
      />
      <Stack.Screen
        name="Code Verification"
        component={CodeVerif}
        options={{
          headerTitle: 'Verify your Code', 
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#545F71',
          },
          headerStyle: {
            backgroundColor: '#EFD02C',
          },
          headerTintColor: '#545F71',
        }}
      />
      <Stack.Screen
        name="Reset Password"
        component={ResetPw}
        options={{
          headerTitle: 'Reset your Password', 
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#545F71',
          },
          headerStyle: {
            backgroundColor: '#EFD02C',
          },
          headerTintColor: '#545F71',
        }}
      />
      <Stack.Screen
        name="Account Sign-In"
        component={SignIn}
        options={{
          headerTitle: 'Sign-in to your Account', 
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#545F71',
          },
          headerStyle: {
            backgroundColor: '#EFD02C',
          },
          headerTintColor: '#545F71',
          headerLeft: null,
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Welcome />
      <Logo />
      <Input onSignInPress={() => navigation.navigate('Homepage')} />

      <TouchableOpacity
        style={styles.newAccountButton}
        onPress={() => navigation.navigate('Forgot Password')}
      >
        <View style={styles.but}>
          <Text style={styles.style2}>Forgot Password?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.newAccountButton}
        onPress={() => navigation.navigate('Create Account')}
      >
        <View style={styles.but}>
          <Text style={styles.style2}>New Here? Create an Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#565857',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    fontSize: 18,
    backgroundColor: '#EFD02C',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    fontWeight: 'bold',
    color: '#545F71',
    marginTop: 10,
    marginBottom: 10
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#545F71',
  },
  but: {
    paddingBottom: 30,
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