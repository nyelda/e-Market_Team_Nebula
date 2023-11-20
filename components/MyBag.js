import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  const items = [
    {
      name: 'T-Square',
      price: '₱450.00',
      rating: 4.5,
      stock: 1,
      seller: 'Daniel Suyat',
    },
    {
      name: 'PE Uniform Male',
      price: '₱275.50',
      rating: 3.9,
      stock: 3,
      seller: 'Meljune Go',
    },
    {
      name: 'Casio fx-500ES',
      price: '₱623.79',
      rating: 4.3,
      stock: 1,
      seller: 'Angelica Cruz',
    },
    {
      name: 'Protractor',
      price: '₱100.67',
      rating: 4.8,
      stock: 6,
      seller: 'Nicole Dino',
    },
    {
      name: 'School Uniform Male',
      price: '₱999.01',
      rating: 3.3,
      stock: 10,
      seller: 'Kenneth Cordero',
    },
    {
      name: 'Predator Gaming Laptop',
      price: '₱80,000.00',
      rating: 4.9,
      stock: 2,
      seller: 'Johnny Eniceo',
    },
  ];

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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20, 
    fontWeight: 'bold',
    fontFamily: 'lucida grande',
  }
});

export default App;
