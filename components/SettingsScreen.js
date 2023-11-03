import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import ConfirmationModal from './ConfirmationModal';
import SuccessModal from './SuccessModal';
import DeviceInfo from 'react-native-device-info';
import LogoutIcon from '@mui/icons-material/Logout';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [appVersion, setAppVersion] = useState('');
  const [showAppVersion, setShowAppVersion] = useState(false);

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

  useEffect(() => {
    const version = DeviceInfo.getVersion();
    setAppVersion(version);
  }, []);

  const toggleAppVersion = () => {
    setShowAppVersion((prev) => !prev);
  };

  return (
    <View style={[styles.container, darkModeEnabled && styles.darkModeContainer]}>
      <Text style={styles.header}>Settings</Text>
      <TouchableWithoutFeedback onPress={toggleAppVersion}>
        <View style={styles.appVersionContainer}>
          <Text style={styles.appVersionLabel}>App Version</Text>
          <Text style={styles.appVersionValue}>
            {showAppVersion ? appVersion : 'Click to Show'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconNav} onPress={saveSettings}>
          <LogoutIcon style={{ fontSize: 25, color: 'black' }} />
          <Text style={styles.iconLabel}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      <ConfirmationModal
        isVisible={isModalVisible}
        onCancel={onCancelModal}
        onConfirm={onConfirmModal}
      />
      <SuccessModal
        isVisible={isSuccessModalVisible}
        onClose={onCloseSuccessModal}
      />
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
  header: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#EFD02C',
    fontWeight: 'bold',
    fontFamily: 'lucida grande'
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
    fontWeight: 'bold'
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
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconNav: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
});

export default SettingsScreen;