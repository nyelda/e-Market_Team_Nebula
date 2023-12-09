import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import Constants from 'expo-constants';

const AddList = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddList = () => {
    // Add your logic to handle the addition of a new list
    // You can use the onAddListPress prop to communicate with the parent component
    onAddListPress({ title, description });
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity onPress={handleAddList}>
        <Text>Add List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddList;