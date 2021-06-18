import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the home page</Text>
      <FontAwesome
        name="bars"
        color="black"
        size={24}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
