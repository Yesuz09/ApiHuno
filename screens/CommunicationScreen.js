import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Communications from 'react-native-communications';

const CommunicationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleCall = () => {
    if (phoneNumber) {
      Communications.phonecall(phoneNumber, true);
    }
  };

  const handleSMS = () => {
    if (phoneNumber) {
      Communications.text(phoneNumber);
    }
  };

  const handleEmail = () => {
    if (recipient && subject && body) {
      Communications.email([recipient], null, null, subject, body);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        style={{ marginBottom: 20, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1, minWidth: 200 }}
        placeholder="Ingrese el número de teléfono"
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <TextInput
        style={{ marginBottom: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1, minWidth: 200 }}
        placeholder="Para:"
        onChangeText={text => setRecipient(text)}
        value={recipient}
        keyboardType="email-address"
      />
      <TextInput
        style={{ marginBottom: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1, minWidth: 200 }}
        placeholder="Asunto:"
        onChangeText={text => setSubject(text)}
        value={subject}
      />
      <TextInput
        style={{ marginBottom: 10, paddingHorizontal: 10, height: 80, borderColor: 'gray', borderWidth: 1, minWidth: 200 }}
        placeholder="Cuerpo del correo:"
        multiline
        onChangeText={text => setBody(text)}
        value={body}
      />

      <Button title="Llamar" onPress={handleCall} style={{ marginTop: 10 }} />
      <Button title="Enviar SMS" onPress={handleSMS} style={{ marginTop: 10 }} />
      <Button title="Enviar Email" onPress={handleEmail} style={{ marginTop: 10 }} />
    </View>
  );
};

export default CommunicationScreen;
