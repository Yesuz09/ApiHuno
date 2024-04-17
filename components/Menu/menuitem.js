import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function MenuItem ( props ) {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={props.onPress}>
            <Image source={props.icon} style={styles.menuIcon} />
            <Text style={styles.menuText}>{props.label}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    menuItem: {
        width: '48%', // Ajustar el ancho según sea necesario
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Coloca el color adecuado de los botones
        borderRadius: 10, // Ajustar según el diseño
        padding: 10, // Ajustar el relleno según sea necesario
        // Añade sombra u otros estilos para los botones aquí
      },
      menuIcon: {
        width: 60, // Ajusta esto según el tamaño de tus íconos
        height: 60, // Ajusta esto según el tamaño de tus íconos
        marginBottom: 8, // Ajustar el margen según sea necesario
      },
      menuText: {
        fontSize: 16,
        color: '#000000', // Ajustar el color del texto según sea necesario
        // Define otros estilos de fuente según el diseño
      },
});