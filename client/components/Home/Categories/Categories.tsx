import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

import { items } from '../../../utils/itemsCategory';

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <View key={item.text} style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  imageContainer: {
    marginRight: 30,
    alignItems: 'center',
  },

  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },

  text: {
    fontSize: 13,
    fontWeight: '900',
  },
});
