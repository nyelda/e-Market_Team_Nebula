import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const backendUrl = Constants.expoConfig.extra.REACT_APP_BACKEND_URL;

const UserProfile = () => {
  const defaultProfileImage = require('../assets/profilePic.jpg');

  const [user, setUser] = useState(null);

  const [savedItems, setSavedItems] = useState({
    Electronics: [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Smartphone' },
    ],
    Clothing: [
      { id: 3, name: 'T-shirt' },
      { id: 4, name: 'Jeans' },
    ],
    Books: [
      { id: 5, name: 'Book 1' },
      { id: 6, name: 'Book 2' },
    ],
    Uniform: [
      { id: 7, name: 'PE Uniform' },
      { id: 8, name: 'School Uniform' },
    ],
  });

  const [editing, setEditing] = useState(false);

  const handleSaveProfile = async () => {
    setEditing(false);
    try {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        const response = await axios.patch(`${backendUrl}/update-user`, user, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        alert('Profile is successfully updated ');
        console.log('Update Profile Response:', response.data);
      } else {
        console.error('No token found. Unable to update profile.');
      }
    } catch (error) {
      alert('Error updating profile: ' + error);
      console.error('Error updating profile:', error);
    }
  };

  const programs = [
    'Computer Science',
    'Computer Engineering',
    'Civil Engineering',
    'Architecture',
    'Mechanical Engineering',
    'Business Management',
  ];

  const yearLevels = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year'];

  const savedItemsData = Object.entries(savedItems).map(([category, items]) => ({
    category,
    items,
  }));

  const renderItem = ({ item }) => (
    <View key={item.category}>
      <Text style={styles.savedItemsCategory}>{item.category}:</Text>
      <View style={styles.bulletList}>
        {item.items.map((savedItem) => (
          <View key={savedItem.id} style={styles.bulletListItem}>
            <Text style={styles.bulletPoint}>➜</Text>
            <Text style={styles.savedItem}>{savedItem.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (token) {
          const response = await axios.get(`${backendUrl}/user-data`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.data.success) {
            const userProfile = response.data.user;
            setUser({
              ...userProfile,
              profileImage: userProfile.profileImage || defaultProfileImage,
            });
          } else {
            console.error('Error fetching user data:', response.data.message);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={user?.profileImage || defaultProfileImage} style={styles.profileImage} />

      {editing ? (
        <>
          <Input
            label="Username"
            placeholder="i.e. Juan23"
            value={user?.username}
            onChangeText={(text) => setUser((prevUser) => ({ ...prevUser, username: text }))}
          />
          <Input
            label="Full Name"
            placeholder="i.e. Juan dela Cruz"
            value={user?.fullname}
            onChangeText={(text) => setUser((prevUser) => ({ ...prevUser, fullname: text }))}
          />
          <Input
            label="Contact Number"
            placeholder="+639........."
            value={user?.contactNumber.toString()}
            onChangeText={(text) => setUser((prevUser) => ({ ...prevUser, contactNumber: text }))}
          />

          <Input
            label="School Email"
            placeholder="username@tip.edu.ph"
            value={user?.email}
            onChangeText={(text) => setUser((prevUser) => ({ ...prevUser, email: text }))}
          />

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Select Program:</Text>
            <Picker
              style={styles.picker}
              selectedValue={user?.program}
              onValueChange={(itemValue) => setUser((prevUser) => ({ ...prevUser, program: itemValue }))}
            >
              {programs.map((program, index) => (
                <Picker.Item key={index} label={program} value={program} />
              ))}
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Select Year Level:</Text>
            <Picker
              style={styles.picker}
              selectedValue={user?.yearLevel}
              onValueChange={(itemValue) => setUser((prevUser) => ({ ...prevUser, yearLevel: itemValue }))}
            >
              {yearLevels.map((year, index) => (
                <Picker.Item key={index} label={year} value={year} />
              ))}
            </Picker>
          </View>

          <TouchableOpacity style={styles.editUpdateButton} onPress={handleSaveProfile}>
            <Text style={styles.editUpdateButtonText}>Update Profile</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.userName}>{user?.username}</Text>
          <Text style={styles.fullName}>{user?.fullname}</Text>
          <Text style={styles.contactNumber}>{user?.contactNumber}</Text>
          <Text style={styles.email}>{user?.email}</Text>
          <Text style={styles.programYear}>
            {user?.program}, {user?.yearLevel}
          </Text>

          <TouchableOpacity style={styles.editUpdateButton} onPress={() => setEditing(true)}>
            <Text style={styles.editUpdateButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </>
      )}

      <View style={styles.separator} />
      <Text style={styles.savedItemsListHeader}>Your Saved Items ✅🏷️</Text>

      <FlatList
        data={savedItemsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 65,
    marginTop: 20,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  fullName: {
    fontSize: 20,
    paddingBottom: 5,
  },
  contactNumber: {
    fontSize: 20,
    paddingBottom: 5,
  },
  email: {
    fontSize: 20,
    paddingBottom: 5,
  },
  programYear: {
    fontSize: 20,
    fontStyle: 'italic',
    paddingBottom: 5,
  },
  pickerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerLabel: {
    marginRight: 10,
    fontSize: 18, 
    paddingLeft: 20,
  },
  picker: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
  },
  editUpdateButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  editUpdateButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  savedItemsListHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 9,
    marginBottom: 15,
  },
  savedItemsCategory: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  savedItem: {
    fontSize: 16,
    paddingBottom: 3,
  },
  bulletList: {
    marginLeft: 20,
  },
  bulletListItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletPoint: {
    fontSize: 18,
    marginRight: 5,
  },
});

export default UserProfile;
