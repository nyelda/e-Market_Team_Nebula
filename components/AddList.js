// AddList.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const AddList = ({ onAddListPress }) => {
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