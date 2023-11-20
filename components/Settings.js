import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native';
import { Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ConfirmationModal from './ConfirmationModal';
import SuccessModal from './SuccessModal';
import Modal from 'react-native-modal';

const Settings = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [userComment, setUserComment] = useState('');
  const [selectedRating, setSelectedRating] = useState(1);
  const [isFeedbackMessageModalVisible, setIsFeedbackMessageModalVisible] = useState(false);

  const toggleDarkMode = () => {
    setDarkModeEnabled((prevDarkMode) => !prevDarkMode);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((prevNotifications) => !prevNotifications);
  };

  const saveSettings = () => {
    setIsModalVisible(true);
  };

  const onCancelModal = () => {
    setIsModalVisible(false);
  };

  const onConfirmModal = () => {
    setIsModalVisible(false);
    console.log('Notifications Enabled:', notificationsEnabled);
    console.log('Dark Mode Enabled:', darkModeEnabled);

    setIsSuccessModalVisible(true);
  };

  const onCloseSuccessModal = () => {
    setIsSuccessModalVisible(false);
  };

  const togglePolicies = () => {
    setShowPolicies((prev) => !prev);
  };

  const toggleCommentBox = () => {
    setShowCommentBox((prev) => !prev);
  };

  const submitComment = () => {
    console.log('User Comment:', userComment);
    setUserComment('');
    setShowCommentBox(false);
    setIsFeedbackMessageModalVisible(true);
  };

  return (
    <View style={[styles.container, darkModeEnabled && styles.darkModeContainer]}>
      <View style={styles.appVersionContainer}>
        <Text style={styles.appVersionLabel}>App Version</Text>
        <Text style={styles.appVersionValue}>v1.0.0</Text>
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>
      <TouchableOpacity style={styles.policiesButton} onPress={togglePolicies}>
        <Text style={styles.policiesButtonText}>View App Policies</Text>
      </TouchableOpacity>
      {showPolicies && (
        <ScrollView style={styles.policiesContainer}>
          <Text style={styles.policiesText}>
            IMPORTANT: Sellers should provide the right items to consumers.
            Consumers should not scam the sellers into buying the items.
          </Text>
          <Text style={styles.policiesText2}>
          From Team Nebula 🌌
          </Text>
           
          
        </ScrollView>
      )}
      <TouchableOpacity style={styles.feedbackButton} onPress={toggleCommentBox}>
        <Text style={styles.feedbackButtonText}>Send your Feedback</Text>
      </TouchableOpacity>
      {showCommentBox && (
        <View>
          <TextInput
            placeholder="Write what you think..."
            value={userComment}
            onChangeText={(text) => setUserComment(text)}
            style={[styles.commentInput, { height: 100, textAlignVertical: 'top', paddingLeft: 10,  }]} // Adjust the paddingLeft as needed
          />
          <View style={styles.sliderAndSubmitContainer}>
            <View style={styles.ratingContainer}>
              <Text style={[styles.ratingLabel, { textAlign: 'center' }]}>
                ⭐ ⭐ ⭐ Rate TSe-Market! (1-5) ⭐ ⭐ ⭐
              </Text>
              <Slider
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={selectedRating}
                onValueChange={(value) => setSelectedRating(value)}
                thumbStyle={styles.sliderThumb}
                thumbTintColor="#EFD02C"
                trackStyle={styles.sliderTrack}
                minimumTrackTintColor="#EFD02C"
                maximumTrackTintColor="gray"
              />
              <Text style={styles.ratingValue}>{selectedRating}</Text>
            </View>
            <TouchableOpacity
              style={styles.commentSubmitButton}
              onPress={submitComment}
            >
              <Text style={styles.commentSubmitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Modal
        isVisible={isFeedbackMessageModalVisible}
        onBackdropPress={() => setIsFeedbackMessageModalVisible(false)}
      >
        <View style={styles.feedbackModal}>
          <Text style={styles.feedbackModalText}>
            Thanks! Your feedback has been recorded!
          </Text>
          <TouchableOpacity
            style={styles.closeFeedbackModalButton}
            onPress={() => setIsFeedbackMessageModalVisible(false)}
          >
            <Text style={styles.closeFeedbackModalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconNav} onPress={saveSettings}>
          <Icon name="logout" size={25} color="black" />
          <Text style={styles.iconLabel}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      <ConfirmationModal
        isVisible={isModalVisible}
        onCancel={onCancelModal}
        onConfirm={onConfirmModal}
      />
      <SuccessModal isVisible={isSuccessModalVisible} onClose={onCloseSuccessModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkModeContainer: {
    backgroundColor: '#545454',
  },
  appVersionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  appVersionLabel: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  appVersionValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  policiesButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  policiesButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  policiesContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    maxHeight: 120,
  },
  policiesText: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  policiesText2: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 15
  },
  commentInput: {
    fontSize: 17,
    color: 'black',
    fontStyle: 'italic',
    marginBottom: 20,
    borderColor: '#D3D3D3',
    borderWidth: 3,
    marginTop: 10,
  },
  commentSubmitButtonText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  commentSubmitButton: {
    backgroundColor: '#EFD02C',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  feedbackButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconNav: {
    backgroundColor: '#EFD02C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginBottom: 10,
  },
  ratingLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ratingValue: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sliderThumb: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EFD02C',
  },
  sliderTrack: {
    height: 5,
  },
  sliderAndSubmitContainer: {
    marginBottom: 10,
  },
  feedbackModal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  feedbackModalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  closeFeedbackModalButton: {
    backgroundColor: '#EFD02C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeFeedbackModalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Settings;
