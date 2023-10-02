import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function SignUp() {
    return (
        <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('LoggedIn')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    signUp: {
        fontSize: 18,
        backgroundColor: "#EFD02C",
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 5,
        fontWeight: 'bold',
        color: '#545F71',
    },
});