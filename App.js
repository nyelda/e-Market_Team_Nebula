import React from 'react'
import { StyleSheet, View } from 'react-native';
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Input from "./components/Input";
import Info from "./components/Info";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Logo />
      <Input />
      <SignUp />
      <Info />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#545454',
},
});
