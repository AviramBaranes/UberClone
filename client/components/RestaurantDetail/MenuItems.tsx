import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { getMenuItems } from '../../utils/getData';
import { Divider } from 'react-native-elements';
import { MenuItem } from '../../types/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM, REMOVE_ITEM } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

export default function MenuItems({
  restaurantName,
}: {
  restaurantName: string;
}) {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.cartReducer);

  const isFoodInCart = (item: MenuItem) => {
    return !!items.find((currItem) => currItem.title === item.title);
  };

  const checkboxClickedHandler = (item: MenuItem, isChecked: boolean) => {
    if (isChecked) {
      dispatch({
        type: ADD_ITEM,
        payload: { menuItem: item, restaurantName },
      });
    } else {
      dispatch({ type: REMOVE_ITEM, payload: { menuItem: item } });
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {getMenuItems().map((item) => (
        <View key={item.image} style={styles.itemContainer}>
          <BouncyCheckbox
            iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
            fillColor='green'
            onPress={(isChecked) => checkboxClickedHandler(item, isChecked)}
            isChecked={isFoodInCart(item)}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Divider
            width={0.5}
            orientation='vertical'
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  infoContainer: {
    width: 230,
    justifyContent: 'space-evenly',
  },

  title: { fontSize: 19, fontWeight: '600' },

  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    // marginLeft: 10,
  },
});
