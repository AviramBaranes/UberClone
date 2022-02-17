import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import HeaderButton from './HeaderButton';

export default function HeaderTabs() {
  const [active, setActive] = useState('Delivery');

  return (
    <View style={styles.header}>
      <HeaderButton text='Delivery' active={active} setActive={setActive} />
      <HeaderButton text='Pickup' active={active} setActive={setActive} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
