import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../RootNavigation';

interface AboutProps {
  route: NativeStackScreenProps<
    RootStackParamList,
    'RestaurantDetail'
  >['route'];
}
export default function About({ route }: AboutProps) {
  const { name, categories, image_url, price, rating, reviews } = route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },

  name: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },

  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
});
