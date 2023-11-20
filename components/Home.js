import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../components/Search';
import UserProfile from '../components/UserProfile';
import MyBag from '../components/MyBag';
import Settings from "./Settings";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const goToSearch = () => {
    navigation.navigate('Search');
  };

  const goToUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const goToMyBag = () => {
    navigation.navigate('MyBag');
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/TSeMarketLogo.jpg')} style={styles.img} />
      <Text style={styles.text1}>Searching for second-hand items will be a click away!</Text>
      <TouchableOpacity onPress={goToSearch} style={styles.searchIcon}>
        <Icon name="search" size={30} color="#EFD02C" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToUserProfile} style={styles.searchIcon}>
        <Icon name="person-outline" size={30} color="#EFD02C" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToMyBag} style={styles.searchIcon}>
        <Icon name="basket-outline" size={30} color="#EFD02C" />
      </TouchableOpacity>
      {/* Add Settings icon with onPress handler */}
      <TouchableOpacity onPress={goToSettings} style={styles.settingsIcon}>
        <Icon name="cog" size={30} color="#EFD02C" />
      </TouchableOpacity>
    </View>
  );
}

export default function Home() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: 'Search for Items',
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
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          headerTitle: 'User Profile',
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
      <Stack.Screen
        name="MyBag"
        component={MyBag}
        options={{
          headerTitle: 'My Bag',
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
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Settings',
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
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#565857',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 355,
    height: 355,
  },
  text1: {
    fontSize: 19,
    color: '#EFD02C',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  searchIcon: {
    marginTop: 20,
  },
  settingsIcon: {
    marginTop: 20,
  },
});
