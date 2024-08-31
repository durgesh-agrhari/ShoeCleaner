// import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import index from '../components';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Index" component={index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
