import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootNavigation';
import About from '../components/RestaurantDetail/About';

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
    </>
  );
}
