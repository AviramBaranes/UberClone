import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function RestaurantInfo({
  name,
  rating,
}: {
  name: string;
  rating: number;
}) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },

    rating: {
      backgroundColor: '#eee',
      height: 30,
      width: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text>{name}</Text>
        <Text>30-45 • min</Text>
      </View>
      <View style={styles.rating}>
        <Text>{rating}</Text>
      </View>
    </View>
  );
}
