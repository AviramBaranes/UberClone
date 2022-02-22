import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from './Icon';

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon='home' text='Home' />
      <Icon icon='search' text='Browse' />
      <Icon icon='shopping-bag' text='Grocery' />
      <Icon icon='receipt' text='Orders' />
      <Icon icon='user' text='Account' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginHorizontal: 30,
  },
});
