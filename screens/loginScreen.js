import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import InputField  from '../components/common/InputField';
import Button from '../components/common/Button';
import Logo from '../components/Login/login';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    navigation.navigate('Menu');
  };
  return (
    <View style={styles.container}>
      <Logo source={require('../assets/icon.png')} />
      <Text style={styles.title}>Login</Text>
      <InputField
        placeholder="Email"
        onChangeText={setUsername}
        value={username}
      />
      <InputField
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotPassword: {
    marginTop: 15,
    color: '#0000ff',
  },
});
export default LoginScreen;