import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MenuItem from '../components/Menu/menuitem';
import materiasImage from '../assets/materias.png';
import estudiantesImage from '../assets/estudiantes.png';
import maestrosImage from '../assets/maestros.png';
import estadisticasImage from '../assets/estadisticas.png';
    const MenuScreen = ({ navigation }) => {
        const handleMateriasPress = () => {
            navigation.navigate('Login')
        };
      
        const handleAlumnosPress = () => {
            navigation.navigate('Login')
        };
      
        const handleMaestrosPress = () => {
            navigation.navigate('Login')
        };
      
        const handleEstadisticasPress = () => {
            navigation.navigate('Login')
        };
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.menuRow}>
          <MenuItem
            icon={materiasImage}
            label="Materias"
            onPress={handleMateriasPress}
          />
          <MenuItem
            icon={estudiantesImage}
            label="Alumnos"
            onPress={handleAlumnosPress}
          />
        </View>
        <View style={styles.menuRow}>
          <MenuItem
            icon={maestrosImage}
            label="Maestros"
            onPress={handleMaestrosPress}
          />
          <MenuItem
            icon={estadisticasImage}
            label="Estadísticas"
            onPress={handleEstadisticasPress}
          />
        </View>
      </ScrollView>
    );
  };
const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#f0f0f0', // Coloca el color adecuado del fondo
    },
    menuRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20, // Ajustar el margen según sea necesario
    },
});
export default MenuScreen;