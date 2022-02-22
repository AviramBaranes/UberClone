import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MenuItem } from '../../types/MenuItem';

export default function OrderItem({ item }: { item: MenuItem }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },

  title: {
    fontWeight: '600',
    fontSize: 16,
  },

  price: {
    opacity: 0.7,
    fontSize: 16,
  },
});
