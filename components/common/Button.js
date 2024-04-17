import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function Button (props) {
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0000ff', // Ajusta este color al del botón en la imagen
        padding: 15,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
});