import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: 'Username',
    fullName: 'Full Name',
    contactNumber: 'Contact Number',
    email: 'School Email',
    program: 'Computer Science',
    yearLevel: '1st Year',
    profileImage: require('../assets/1.jpeg'),
  });

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

  const handleSaveProfile = () => {
    setEditing(false);
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

  return (
    <View style={styles.container}>
      <Image source={user.profileImage} style={styles.profileImage} />

      {editing ? (
        <>
          <Input
            label="Username"
            placeholder="i.e. Juan23"
            value={user.username}
            onChangeText={(text) => setUser((prevUser) => ({ ...prevUser, username: text }))}
          />
          <Input
            label="Full Name"
            placeholder="i.e. Juan dela Cruz"
            value={user.fullName}
            onChangeText={(text) => setUser((prevUser) => ({ ...prevUser, fullName: text }))}
          />
          <Input
            label="Contact Number"
            placeholder="+639........."
            value={user.contactNumber}
            onChangeText={(text) => setUser({ ...user, contactNumber: text })}
          />
          <Input
            label="School Email"
            placeholder="username@tip.edu.ph"
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />

          {/* Program Dropdown */}
          <View style={styles.pickerContainer}>
            <Text>Select Program:</Text>
            <Picker
              selectedValue={user.program}
              onValueChange={(itemValue) => setUser((prevUser) => ({ ...prevUser, program: itemValue }))}
            >
              {programs.map((program, index) => (
                <Picker.Item key={index} label={program} value={program} />
              ))}
            </Picker>
          </View>

          {/* Year Level Dropdown */}
          <View style={styles.pickerContainer}>
            <Text>Select Year Level:</Text>
            <Picker
              selectedValue={user.yearLevel}
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
          <Text style={styles.userName}>{user.username}</Text>
          <Text style={styles.fullName}>{user.fullName}</Text>
          <Text style={styles.contactNumber}>{user.contactNumber}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.programYear}>
            {user.program}, {user.yearLevel}
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
