import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {FAB} from 'react-native-paper';
import Header from '../shared/header';
import {Colors} from '../shared/colors';
import DiaryCard from '../components/card';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={{paddingHorizontal: 24}}>
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
      </ScrollView>
      <FAB style={styles.fab} icon="plus" label="New" color={Colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.normal,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 10,
    backgroundColor: Colors.secondary.normal,
  },
});
