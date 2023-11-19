import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../components/Search';
import UserProfile from "../components/UserProfile";
import MyBag from "../components/MyBag";
//import SettingsScreen from "../components/SettingsScreen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

  return (
    <View style={styles.container}>
      <Image source={require('../assets/TSe-Market LOGO FINAL.png')} style={styles.img} />
      <Text style={styles.text1}>Searching for second-hand items will be a click away!</Text>
      <TouchableOpacity onPress={goToSearch} style={styles.searchIcon}>
        <Ionicons name="search" size={30} color="#EFD02C" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToUserProfile} style={styles.searchIcon}>
        <Ionicons name="person-outline" size={30} color="#EFD02C" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToMyBag} style={styles.searchIcon}>
        <Ionicons name="basket-outline" size={30} color="#EFD02C" />
      </TouchableOpacity>
    </View>
  );
}

function UserProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>User Profile Screen</Text>
      {/* Add relevant content for the user profile */}
    </View>
  );
}

function MyBagScreen() {
  return (
    <View style={styles.container}>
      <Text>My Bag Screen</Text>
      {/* Add relevant content for the My Bag screen */}
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#545F71',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: '#EFD02C',
        },
      }}
    >
      <Tab.Screen
        name="User Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="My Bag"
        component={MyBagScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-bag" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
    </Tab.Navigator>
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
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
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
});