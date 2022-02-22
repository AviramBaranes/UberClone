import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import CheckoutModalContent from './CheckoutModalContent';

export default function ViewCart() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { totalPrice, items, restaurantName } = useSelector(
    (state: RootState) => state.cartReducer
  );

  const totalPriceUSD = totalPrice.toFixed(2) + '$';

  return (
    <>
      {modalVisibility && (
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisibility}
          onRequestClose={() => setModalVisibility(false)}
        >
          <CheckoutModalContent
            items={items}
            restaurantName={restaurantName}
            setModalVisibility={setModalVisibility}
            total={totalPriceUSD}
          />
        </Modal>
      )}
      {totalPrice > 1 && (
        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => setModalVisibility(true)}
              style={styles.touchable}
            >
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
