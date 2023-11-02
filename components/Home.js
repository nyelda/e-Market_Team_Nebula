import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BadgeIcon from '@mui/icons-material/Badge';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/TSe-Market LOGO FINAL.png')} style={styles.img} />
        <Text style={styles.text1}>Searching for second-hand items will be a click away!</Text>
      </View>
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.iconNav}
          onPress={() => navigation.navigate('Search')}
        >
          <SearchIcon style={{ fontSize: 24, color: 'black' }} />
          <Text style={styles.iconLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNav} onPress={() => navigation.navigate('Profile')}>
          <BadgeIcon style={{ fontSize: 24, color: 'black' }} />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNav} 
          onPress={() => navigation.navigate('My Bag')}
          >
          <LocalMallIcon style={{ fontSize: 24, color: 'black' }} />
          <Text style={styles.iconLabel}>My Bag</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconNav} onPress={() => navigation.navigate('Settings')}>
          <SettingsIcon style={{ fontSize: 24, color: 'black' }} />
          <Text style={styles.iconLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 355,
    height: 355,
  },
  text1: {
    fontSize: 20,
    color: '#EFD02C',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  iconNav: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 12,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#545454',
    paddingBottom: 10,
  },
});
