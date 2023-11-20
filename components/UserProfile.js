import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

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

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={user.profileImage} style={styles.profileImage} />

        {editing ? (
          <View>
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
            <Text>Select Program:</Text>
            <Picker
              selectedValue={user.program}
              onValueChange={(itemValue) => setUser({ ...user, program: itemValue })}
            >
              {programs.map((program, index) => (
                <Picker.Item key={index} label={program} value={program} />
              ))}
            </Picker>

            {/* Year Level Dropdown */}
            <Text>Select Year Level:</Text>
            <Picker
              selectedValue={user.yearLevel}
              onValueChange={(itemValue) => setUser({ ...user, yearLevel: itemValue })}
            >
              {yearLevels.map((year, index) => (
                <Picker.Item key={index} label={year} value={year} />
              ))}
            </Picker>

            <TouchableOpacity style={styles.editUpdateButton} onPress={handleSaveProfile}>
              <Text style={styles.editUpdateButtonText}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
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
            
          </View>
        )}
        <View style={styles.separator}></View>

        <View style={styles.savedItemsContainer}>
            <Text style={styles.savedItemsHeader}>Your Saved Items:</Text>
            {Object.keys(savedItems).map((category) => (
                <View key={category}>
                <Text style={styles.savedItemsCategory}>{category}:</Text>
                <View style={styles.bulletList}>
                    {savedItems[category].map((item) => (
                    <View key={item.id} style={styles.bulletListItem}>
                        <Text style={styles.bulletPoint}>➜</Text>
                        <Text style={styles.savedItem}>{item.name}</Text>
                    </View>
                    ))}
                </View>
                </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginLeft: 20,
    },
    profileContainer: {
      alignItems: 'center',
      borderStyle: 'square',
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
    fontFamily: 'lucida grande',
    paddingBottom: 5
  },
  fullName: {
    fontSize: 20,
    fontFamily: 'lucida grande',
    paddingBottom: 5
  },
  contactNumber: {
    fontSize: 20,
    fontFamily: 'lucida grande',
    paddingBottom: 5
  },
  email: {
    fontSize: 20,
    fontFamily: 'lucida grande',
    paddingBottom: 5
  },
  programYear: {
    fontSize: 20,
    fontFamily: 'lucida grande',
    fontStyle: 'italic',
    paddingBottom: 5
  },
  savedItemsContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'lightgray',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
  },
  savedItemsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'lucida grande',
    paddingBottom: 8
  },
  savedItemsCategory: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'lucida grande',
  },
  savedItem: {
    fontSize: 16,
    paddingBottom: 5
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
    borderBottomColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
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
});

export default UserProfile;
