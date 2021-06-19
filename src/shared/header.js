import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="bars"
        color="black"
        size={26}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={{marginHorizontal: 2}}
      />
      <View style={{flexGrow: 1}}>
        <TextInput
          mode="flat"
          placeholder="Search Diary"
          theme={{colors: {primary: 'lightgrey'}}}
          underlineColor="transparent"
          style={{
            backgroundColor: 'transparent',
            height: 40,
            marginHorizontal: 10,
          }}
        />
      </View>
      <MaterialCommunityIcons
        name="sort-variant"
        color="black"
        size={26}
        style={{marginHorizontal: 2, marginRight: 10}}
      />
      <MaterialIcons
        name="calendar-today"
        color="black"
        size={26}
        style={{marginHorizontal: 2}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
});
