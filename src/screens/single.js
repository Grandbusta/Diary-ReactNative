import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Single() {
  return (
    <View style={styles.container}>
      <Text>This is the Single page</Text>
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
