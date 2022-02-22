import { combineReducers } from 'redux';

import cartReducer, { CartState } from './cartReducer';

const reducers = combineReducers({
  cartReducer,
});

export type RootState = {
  cartReducer: CartState;
};

export default reducers;
