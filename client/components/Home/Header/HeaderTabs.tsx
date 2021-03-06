import { View, Text, StyleSheet } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import HeaderButton from './HeaderButton';

export default function HeaderTabs({
  active,
  setActive,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) {
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
