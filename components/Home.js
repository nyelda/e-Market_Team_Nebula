import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import SmsIcon from '@mui/icons-material/Sms';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';

export default function Login() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Find items now..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <SearchIcon style={{ fontSize: 20, color: 'gray' }} /> 
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/TSe-Market LOGO FINAL.png')} style={styles.img} />
        <Text style={styles.text1}>Searching for second-hand items will be a click away!</Text>
      </View>
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.iconNav}  onPress={() => navigateToScreen('HomeScreen')}>
          <HomeIcon style={{fontSize:24, color: 'black' }} />
          <Text style={styles.iconLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNav}  onPress={() => navigateToScreen('SavedScreen')}>
          <VerifiedIcon style={{fontSize:24, color: 'black' }} />
          <Text style={styles.iconLabel}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNav}  onPress={() => navigateToScreen('MessagesScreen')}>
          <SmsIcon style={{fontSize:24, color: 'black' }} />
          <Text style={styles.iconLabel}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNav} onPress={() => navigateToScreen('AccountScreen')}>
          <BadgeIcon style={{fontSize:24, color: 'black' }} />
          <Text style={styles.iconLabel}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNav}  onPress={() => navigateToScreen('BagScreen')}>
          <LocalMallIcon style={{fontSize:24, color: 'black' }} />
          <Text style={styles.iconLabel}>My Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function navigateToScreen(screenName) {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#EFD02C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  iconNav: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 12,
  },
  searchButtonText: {
    color: '#545F71',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  text1: {
    fontSize: 17,
    color: '#EFD02C',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#545454',
    paddingBottom: 10,
  },
});
