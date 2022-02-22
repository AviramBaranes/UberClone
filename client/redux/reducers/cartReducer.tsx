import { MenuItem } from '../../types/MenuItem';
import { ADD_ITEM, REMOVE_ITEM } from '../actions';

type Action = {
  type: string;
  payload: { menuItem: MenuItem; restaurantName: string };
};

export interface CartState {
  items: MenuItem[];
  restaurantName: string;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  restaurantName: '',
  totalPrice: 0,
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { menuItem, restaurantName } = action.payload;
      const newState = { ...state };
      newState.items.push(menuItem);
      newState.totalPrice += +menuItem.price.replace('$', '');
      newState.restaurantName = restaurantName;
      return newState;
    }

    case REMOVE_ITEM: {
      const { menuItem } = action.payload;
      const newState = { ...state };
      newState.items = newState.items.filter(
        (item) => item.title !== menuItem.title
      );
      newState.totalPrice -= +menuItem.price.replace('$', '');
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
