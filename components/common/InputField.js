import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
export default function InputField (props)  {
  return(
    <TextInput
    style={styles.input}
    onChangeText={props.onChangeText}
    value={props.value}
    placeholder={props.placeholder}
  />
  );
}
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    margin: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
  },
});