import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { RestaurantItem } from '../../../types/ResterauntItem';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';

interface RestaurantsItemsProps {
  restaurantData: RestaurantItem[];
}

export default function RestaurantsItems({
  restaurantData,
}: RestaurantsItemsProps) {
  const styles = StyleSheet.create({
    touchable: {
      marginBottom: 30,
    },
    container: {
      marginTop: 10,
      padding: 15,
      backgroundColor: 'white',
    },
  });

  return (
    <>
      {restaurantData.map((restaurant) => (
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={1}
          key={restaurant.image_url}
        >
          <View style={styles.container}>
            <RestaurantImage imageUrl={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
