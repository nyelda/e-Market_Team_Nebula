import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SuccessModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Logout Successfully!</Text>
          <TouchableOpacity onPress={onClose}>
                <Text style={styles.modalText} onPress={() => navigation.navigate('Home')}>Back to Home</Text>
            </TouchableOpacity>
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
    elevation: 10,
  },
  modalText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 18,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default SuccessModal;