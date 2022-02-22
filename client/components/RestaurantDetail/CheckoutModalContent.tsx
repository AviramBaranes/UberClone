import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { MenuItem } from '../../types/MenuItem';
import OrderItem from './OrderItem';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CLEAR_CART } from '../../redux/actions';

export default function CheckoutModalContent({
  restaurantName,
  items,
  total,
  setModalVisibility,
}: {
  restaurantName: string;
  items: MenuItem[];
  total: string;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();

  async function checkOutHandler() {
    await axios.post('http://192.168.1.182:8081/add-order', {
      items,
      restaurantName,
      date: Date.now(),
    });
    setModalVisibility(false);
    dispatch({ type: CLEAR_CART });
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalCheckoutContainer}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        {items.map((item) => (
          <OrderItem item={item} key={item.image} />
        ))}
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text>{total}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={checkOutHandler} style={styles.button}>
            <Text style={styles.buttonCheckoutText}>Checkout: {total}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },

  button: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
  },

  buttonCheckoutText: {
    color: 'white',
    fontSize: 15,
  },
});
