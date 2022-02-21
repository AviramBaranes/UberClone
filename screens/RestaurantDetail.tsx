import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootNavigation';
import About from '../components/RestaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';

type RestaurantDetailProp = NativeStackScreenProps<
  RootStackParamList,
  'RestaurantDetail'
>;

export default function RestaurantDetail({
  navigation,
  route,
}: RestaurantDetailProp) {
  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart />
    </>
  );
}
