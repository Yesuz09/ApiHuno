import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../ApiHuno/assets/screens/homeScreen';
import SettingsScreen from '../ApiHuno/assets/screens/settingsScreen';
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} r/>
      <Tab.Screen name="Settinigs" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}