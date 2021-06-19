import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Header from '../shared/header';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the home page</Text>
      <FAB style={styles.fab} icon="plus" label="New" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 10,
    backgroundColor: 'blue',
  },
});
