import * as FileSystem from 'expo-file-system';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const App = () => {
  const [Nombre, setNombre] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [FechaE, setFechaE] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const filePath = FileSystem.documentDirectory + 'task.json';

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

  const handleAddOrUpdateTask = async () => {
    try {
      if (selectedTaskIndex !== null) {
        // Actualizar tarea existente
        const updatedTask = { Nombre, Descripcion, FechaE };
        const updatedTasks = [...tasks];
        updatedTasks[selectedTaskIndex] = updatedTask;
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setSelectedTaskIndex(null);
      } else {
        // Agregar nueva tarea
        const newTask = { Nombre, Descripcion, FechaE};
        const updatedTasks = [...tasks, newTask];
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
      }
      // Limpiar campos de entrada
      setNombre('');
      setDescripcion('');
      setFechaE('');
    } catch (error) {
      console.error('Error al guardar tarea', error);
    }
  };

  const handleDeleteTask = async (index) => {
    try {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error al eliminar tarea', error);
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setSelectedTaskIndex(index);
    setNombre(taskToEdit.Nombre);
    setDescripcion(taskToEdit.Descripcion);
    setFechaE(taskToEdit.FechaE);
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={Nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripcion"
        value={Descripcion}
        onChangeText={setDescripcion}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de entrega"
        value={FechaE}
        onChangeText={setFechaE}
      />
    
      <Button
        title={selectedTaskIndex !== null ? 'Actualizar' : 'Agregar'}
        onPress={handleAddOrUpdateTask}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.Nombre}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Eliminar"
                onPress={() => handleDeleteTask(index)}
                color="blue"
                
              />
              <Button
                title="Editar"
                onPress={() => handleEditTask(index)}
                color="blue"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop:20,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft:15 
  },
});

export default App;
