import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function SignUp() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.signUp}>Login</Text>
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
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
});