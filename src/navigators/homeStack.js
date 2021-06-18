import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import Single from '../screens/single';
import AddToDiary from '../screens/addToDiary';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Single" component={Single} />
      <Stack.Screen name="AddToDiary" component={AddToDiary} />
    </Stack.Navigator>
  );
}
