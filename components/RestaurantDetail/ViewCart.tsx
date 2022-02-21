import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

export default function ViewCart() {
  const { totalPrice, items } = useSelector(
    (state: RootState) => state.cartReducer
  );

  console.log(items, totalPrice);

  const totalPriceUSD = totalPrice.toFixed(2) + '$';

  return (
    <>
      {totalPrice > 1 && (
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.text}>view cart ({totalPriceUSD})</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    zIndex: 999,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  touchable: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 250,
    position: 'relative',
  },
  text: {
    color: 'white',
  },
});
