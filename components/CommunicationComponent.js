import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import Communications from 'react-native-communications';

const CommunicationComponent = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleCall = () => {
    if (recipient) {
      Communications.phonecall(recipient, true);
    } else {
      Alert.alert('Error', 'Por favor ingresa un número de teléfono válido.');
    }
  };

  const handleSMS = () => {
    if (recipient && message) {
      Communications.text(recipient, message);
    } else {
      Alert.alert('Error', 'Por favor ingresa un número de teléfono y un mensaje.');
    }
  };

  const handleEmail = () => {
    if (recipient) {
      Communications.email([recipient], null, null, 'Asunto del correo', 'Cuerpo del correo');
    } else {
      Alert.alert('Error', 'Por favor ingresa una dirección de correo electrónico válida.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        style={{ marginBottom: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1, minWidth: 200 }}
        placeholder="Número de teléfono o correo electrónico"
        onChangeText={setRecipient}
        value={recipient}
      />
      <TextInput
        style={{ marginBottom: 10, paddingHorizontal: 10, height: 80, borderColor: 'gray', borderWidth: 1, minWidth: 200 }}
        placeholder="Mensaje (para SMS)"
        multiline
        onChangeText={setMessage}
        value={message}
      />
      <Button title="Llamar" onPress={handleCall} />
      <Button title="Enviar SMS" onPress={handleSMS} />
      <Button title="Enviar Email" onPress={handleEmail} />
    </View>
  );
};

export default CommunicationComponent;
