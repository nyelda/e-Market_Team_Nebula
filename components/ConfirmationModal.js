import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationModal = ({ isVisible, onCancel, onConfirm }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Are you sure you want to Logout?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onCancel}>
                <Text style={styles.modalText1}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm}>
                <Text style={styles.modalText2}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#EFD02C',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalText1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 18,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 35,
    marginRight: 10
  },
  modalText2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 18,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    marginLeft: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ConfirmationModal;