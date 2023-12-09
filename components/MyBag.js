import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'T-Square',
      price: '₱450.00',
      rating: 4.5,
      stock: 1,
      seller: 'Nebula Admin',
    },
  ]);

  const handleRemoveItem = (itemId) => {
    Alert.alert(
      'Delete Item',
      'Do you want to remove this item from My Bag?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const updatedItems = cartItems.filter((item) => item.id !== itemId);
            setCartItems(updatedItems);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>Price: {item.price}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={20} color="gold" />
        <Text>{item.rating}</Text>
      </View>
      <Text>Stock: {item.stock}</Text>
      <Text>Seller: {item.seller}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveItem(item.id)}
      >
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.text}>Check Items in My Bag:</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    position: 'relative',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
