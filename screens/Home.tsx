import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import HeaderTabs from '../components/Home/Header/HeaderTabs';
import SearchBar from '../components/Home/Header/SearchBar';
import Categories from '../components/Home/Categories/Categories';
import { getRestaurantsData } from '../utils/getRestaurantsData';
import RestaurantsItems from '../components/Home/RestaurantsItems/RestaurantsItems';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState('New York');

  useEffect(() => {
    getRestaurantsData(city)
      .then((data) => {
        setRestaurantData(data.businesses);
      })
      .catch((err) => console.log(err));
  }, [city]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantsItems restaurantData={restaurantData} />
      </ScrollView>
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
