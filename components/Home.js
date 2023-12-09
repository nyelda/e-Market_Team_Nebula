import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Search from '../components/Search';
import UserProfile from '../components/UserProfile';
import MyBag from '../components/MyBag';
import Settings from './Settings';
import AddList from './AddList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const onBackPress = () => {
    handleLogout();
    return true; 
  };

  useEffect(() => {
    const backHandler = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      onBackPress();
    });
    return () => backHandler();
  }, [navigation]);

  const handleLogout = async () => {
    Alert.alert(
      'Oh no...?',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: async () => {
            
            await AsyncStorage.removeItem('token');
            const tokenAfterLogout = await AsyncStorage.getItem('token');
            console.log('Token after logout:', tokenAfterLogout);

            Alert.alert('Successfully logged out of your account!');
            navigation.navigate('Account Sign-In');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const goToAddList = () => {
    navigation.navigate('Add Item Listing')
  };

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
      <View style={styles.logoContainer}>
        <Image source={require('../assets/TSeMarketLogo.jpg')} style={styles.img} />
        <Text style={styles.text1}>Searching for second-hand items will be a click away!</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={goToSearch} style={styles.icon}>
          <Icon2 name="shopping-search" size={30} color="#EFD02C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToUserProfile} style={styles.icon}>
          <Icon2 name="account-edit-outline" size={30} color="#EFD02C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToAddList} style={styles.icon}>
          <Icon3 name="pluscircleo" size={30} color="#EFD02C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMyBag} style={styles.icon}>
          <Icon2 name="bag-personal-outline" size={30} color="#EFD02C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSettings} style={styles.icon}>
          <Icon name="settings-outline" size={30} color="#EFD02C" />
        </TouchableOpacity>
      </View>
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
        name="Add Item Listing"
        component={AddList}
        options={{
          headerTitle: 'Add an Item Listing', 
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#545F71',
          },
          headerStyle: {
            backgroundColor: '#EFD02C',
          },
          headerTintColor: '#545F71',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 90,
  },
  img: {
    width: 355,
    height: 355,
  },
  text1: {
    fontSize: 16,
    color: '#EFD02C',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  icon: {
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    width: 80, 
    alignItems: 'center',
  },
});
