import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import HeaderTabs from '../components/Home/Header/HeaderTabs';
import SearchBar from '../components/Home/Header/SearchBar';
import Categories from '../components/Home/Categories/Categories';
import { getRestaurantsData } from '../utils/getData';
import RestaurantsItems from '../components/Home/RestaurantsItems/RestaurantsItems';
import BottomTabs from '../components/Home/BottomTabs/BottomTabs';
import { RootStackParamList } from '../RootNavigation';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState('New York');

  useEffect(() => {
    getRestaurantsData(city)
      .then((data) => {
        setRestaurantData(
          data.businesses.filter((business: any) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      })
      .catch((err) => console.log(err));
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <HeaderTabs active={activeTab} setActive={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantsItems
          navigation={navigation}
          restaurantData={restaurantData}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'white',
  },
  page: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
