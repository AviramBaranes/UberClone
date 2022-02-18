import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantImage({ imageUrl }: { imageUrl: string }) {
  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 180,
    },
    touchable: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
  });

  return (
    <>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <TouchableOpacity style={styles.touchable}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
      </TouchableOpacity>
    </>
  );
}
