import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: 'Username',
    fullName: 'Full Name',
    program: 'Program',
    yearLevel: 'Year Level',
    contactNumber: 'Contact Number',
    email: 'School Email',
    profileImage: require('../assets/1.jpeg'),
  });

  const [savedItems, setSavedItems] = useState({
    electronics: [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Smartphone' },
    ],
    clothing: [
      { id: 3, name: 'T-shirt' },
      { id: 4, name: 'Jeans' },
    ],
    books: [
      { id: 5, name: 'Book 1' },
      { id: 6, name: 'Book 2' },
    ],
    uniform: [
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
    <FlatList
    data={savedItemsData}
    renderItem={renderItem}
    keyExtractor={(item) => item.category}
    ListHeaderComponent={() => (
      <View style={styles.container}>
        <Image source={user.profileImage} style={styles.profileImage} />

          {editing ? (
            <>
              <Input
                label="Username"
                placeholder="Username"
                value={user.username}
                onChangeText={(text) => setUser({ ...user, username: text })}
              />
              <Input
                label="Full Name"
                placeholder="Full Name"
                value={user.fullName}
                onChangeText={(text) => setUser({ ...user, fullName: text })}
              />
              <Input
                label="Contact Number"
                placeholder="Contact Number"
                value={user.contactNumber}
                onChangeText={(text) => setUser({ ...user, contactNumber: text })}
              />
              <Input
                label="School Email"
                placeholder="username@example.edu.ph"
                value={user.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
              />

              {/* Program Dropdown */}
              <View key="programPicker">
                <Text>Select Program:</Text>
                <Picker
                  selectedValue={user.program}
                  onValueChange={(itemValue) => setUser({ ...user, program: itemValue })}
                >
                  {programs.map((program, index) => (
                    <Picker.Item key={index} label={program} value={program} />
                  ))}
                </Picker>
              </View>

              {/* Year Level Dropdown */}
              <View key="yearLevelPicker">
                <Text>Select Year Level:</Text>
                <Picker
                  selectedValue={user.yearLevel}
                  onValueChange={(itemValue) => setUser({ ...user, yearLevel: itemValue })}
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
          <View style={styles.separator}></View>
          <Text style={styles.savedItemsListHeader}>Your Saved Items:</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 65,
    marginTop: 20,
    marginRight: 28,
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
  savedItemsContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'lightgray',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
  },
  savedItemsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
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
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
});

export default UserProfile;
