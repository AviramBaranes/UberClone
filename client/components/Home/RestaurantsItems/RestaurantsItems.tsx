import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { RestaurantItem } from '../../../types/RestaurantItem';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';
import { RootStackParamList } from '../../../RootNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface RestaurantsItemsProps {
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
  restaurantData: RestaurantItem[];
}

export default function RestaurantsItems({
  navigation,
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
          onPress={() => navigation.navigate('RestaurantDetail', restaurant)}
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
