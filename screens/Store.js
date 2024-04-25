import * as FileSystem from 'expo-file-system';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  // Elimina la concatenación redundante de 'tasks.json'
  const filePath = FileSystem.documentDirectory + 'tasks.json';
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const info = await FileSystem.getInfoAsync(filePath);
        if (info.exists) {
          const storedTasks = await FileSystem.readAsStringAsync(filePath);
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error al recuperar tareas', error);
      }
    };
    fetchTasks();
  }, []);
  const addTask = async () => {
    try {
      const updatedTasks = [...tasks, task];
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      setTask('');
    } catch (error) {
      console.error('Error al agregar tarea', error);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Agregar tarea"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Agregar" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.taskText}>{item}</Text>}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  taskText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    width: '100%',
  },
});