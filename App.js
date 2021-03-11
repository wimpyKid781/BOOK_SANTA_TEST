import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen'
import {AppTabNavigator} from './Components/AppTabNavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {AppDrawerNavigator} from './Components/AppDrawerNavigator'
export default function App() {
  return (
    <AppContainer />
  );
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen:WelcomeScreen},
  Drawer : {screen:AppDrawerNavigator},
})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
