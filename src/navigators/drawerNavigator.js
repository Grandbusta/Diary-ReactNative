import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Reminder from '../screens/reminder';
import HomeStack from './homeStack';
import {Colors} from '../shared/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        labelStyle={{color: Colors.white}}
        onPress={() => {
          navigation.navigate('HomeStack');
        }}
      />
      <DrawerItem
        label="Reminder"
        labelStyle={{color: Colors.white}}
        onPress={() => {
          navigation.navigate('Reminder');
        }}
        activeBackgroundColor="blue"
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: Colors.primary.light,
          contentContainerStyle: {paddingHorizontal: 0},
          itemStyle: {paddingHorizontal: 10, marginHorizontal: 0},
          labelStyle: {color: 'white'},
        }}
        drawerStyle={{backgroundColor: Colors.primary.normal}}>
        <Drawer.Screen
          name="HomeStack"
          options={{
            title: 'Home',
            drawerIcon: () => (
              <MaterialIcons
                name="calendar-today"
                color={Colors.lightgrey}
                size={26}
              />
            ),
          }}
          component={HomeStack}
        />
        <Drawer.Screen name="Reminder" component={Reminder} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
