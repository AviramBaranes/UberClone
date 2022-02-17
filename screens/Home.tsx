import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/Header/HeaderTabs';
import SearchBar from '../components/Header/SearchBar';
import Categories from '../components/Categories/Categories';

export default function Home() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
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
