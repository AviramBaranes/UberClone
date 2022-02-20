import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { RestaurantItem } from './types/RestaurantItem';

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = { headerShown: false };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
  Home: undefined;
  RestaurantDetail: RestaurantItem;
};
