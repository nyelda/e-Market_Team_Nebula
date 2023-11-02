import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Rating from '@mui/material/Rating';

function App() {
  const items = [
    {
      name: 'Rotring T-Square',
      price: '₱450.00',
      rating: 4.5,
      stock: 1,
      seller: 'Alexander Pineda',
    },
    {
      name: 'PE Uniform Female',
      price: '₱275.50',
      rating: 3.9,
      stock: 3,
      seller: 'Eliza Santos',
    },
    {
      name: 'Casio ES-5198',
      price: '₱623.79',
      rating: 4.3,
      stock: 1,
      seller: 'Angelica Cruz',
    },
    {
      name: 'Rotring Drafting Pen',
      price: '₱899.67',
      rating: 4.8,
      stock: 6,
      seller: 'Peggy Dimacasalong',
    },
    {
      name: 'Aquaflask Limited Edition',
      price: '₱999.01',
      rating: 3.3,
      stock: 10,
      seller: 'Aaron Burlaloy',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>Price: {item.price}</Text>
      <Rating name="rating" value={item.rating} precision={0.1} readOnly />
      <Text>Stock: {item.stock}</Text>
      <Text>Seller: {item.seller}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.text}>Check Items in My Bag:</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 20, 
    fontWeight: 'bold',
    fontFamily: 'lucida grande'
  }
});

export default App;
