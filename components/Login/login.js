import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
export default function Logo ( props ) {
  return(
  <View style={styles.logoContainer}>
    <Image style={{ width: 200, height: 200 }} source={props.source} />
  </View>
  );
}
const styles = StyleSheet.create({
    logoContainer: {
        backgroundColor: '#ffffff', // Ajusta este color al de tu logo
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
}); 