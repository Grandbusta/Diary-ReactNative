import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from './colors';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome
          name="bars"
          color={Colors.lightgrey}
          size={26}
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={{marginHorizontal: 2}}
        />
      </TouchableOpacity>
      <View style={{flexGrow: 1}}>
        <TextInput
          mode="flat"
          placeholder="Search Diary"
          theme={{
            colors: {
              primary: Colors.primary.light,
              text: 'white',
              placeholder: Colors.lightgrey,
            },
          }}
          underlineColor="transparent"
          style={{
            backgroundColor: 'transparent',
            height: 40,
            marginHorizontal: 10,
          }}
        />
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="sort-variant"
          color={Colors.lightgrey}
          size={26}
          style={{marginHorizontal: 2, marginRight: 20}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons
          name="calendar-today"
          color={Colors.lightgrey}
          size={26}
          style={{marginHorizontal: 2}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary.normal,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
});
