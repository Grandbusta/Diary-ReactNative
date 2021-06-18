import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Reminder from '../screens/reminder';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomeStack"
          options={{title: 'Home'}}
          component={HomeStack}
        />
        <Drawer.Screen name="Reminder" component={Reminder} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
