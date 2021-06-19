import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {Colors} from '../shared/colors';

export default function DiaryCard() {
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: 'https://carevare.com/wp-content/uploads/2020/02/romanticmoments-1024x768.jpg',
        }}
        style={styles.cardCover}
      />
      <Card.Content style={styles.cardContent}>
        <View style={styles.contentView}>
          <View style={styles.dateView}>
            <Text style={styles.text}>Wed</Text>
            <Text style={styles.largetext}>08</Text>
            <Text style={styles.text}>Apr</Text>
          </View>
          <View style={{width: '87%'}}>
            <Title style={{color: Colors.white}}>A new card</Title>
            <Paragraph style={{color: Colors.white}}>
              {`This is the content of the diary that was known up till now This is the content of the diary that was known up till now This is the content of the diary that was known up till now content of the diary that was known up till now content of the diary that was known up till now content of the diary that was known up till now`.slice(
                0,
                120,
              )}
            </Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary.light,
    borderRadius: 20,
    marginVertical: 10,
  },
  cardCover: {
    borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardContent: {marginVertical: 6},
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateView: {marginRight: 20, alignItems: 'center'},
  text: {fontSize: 16, color: Colors.white},
  largetext: {fontSize: 30, color: Colors.white},
});
