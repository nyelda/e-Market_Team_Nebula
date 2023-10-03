import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Input from "./components/Input";
import Info from "./components/Info";
import Login from "./components/Login";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'TIPians Second-hand e-Market', 
            headerTitleAlign: 'center', 
            headerTitleStyle: {
              fontSize: 24, 
              fontWeight: 'bold', 
              color: '#545F71', 
              fontFamily: 'lucida grande', 
            },
            headerStyle: {
              backgroundColor: '#EFD02C', 
            },
            headerTintColor: '#545F71', 
          }}
        />
        <Stack.Screen name="LoggedIn" component={Login} 
        options={{
          headerTitle: 'TSe-Market Homepage', 
          headerTitleAlign: 'center', 
          headerTitleStyle: {
            fontSize: 24, 
            fontWeight: 'bold', 
            color: '#545F71', 
            fontFamily: 'lucida grande', 
          },
          headerStyle: {
            backgroundColor: '#EFD02C', 
          },
          headerTintColor: '#545F71', 
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
      <Input />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('LoggedIn')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Info />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
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
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#545F71',
  },
});
