import React, { useState } from 'react'; // Import useState
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the search button press
  const handleSearch = () => {
    // Handle the search functionality here with the searchQuery state
    console.log('Search Query:', searchQuery);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/TSe-Market LOGO FINAL.png')}  
          style={styles.img}/>    
      </View>
      <Text>HOMEPAGE NA MAY SEARCH BAR</Text>
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
  innerContainer: {
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 350, 
    height: 350,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%'
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#EFD02C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#545F71',
    fontWeight: 'bold',
  },
});
