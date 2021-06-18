import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AddToDiary() {
  return (
    <View style={styles.container}>
      <Text>This is the Page to add to diary</Text>
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
