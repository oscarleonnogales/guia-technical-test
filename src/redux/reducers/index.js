import { combineReducers } from 'redux';

import cartReducer from './cart';
import cartOpenReducer from './cartOpen';
import purchasesReducer from './purchases';

export default combineReducers({
	cart: cartReducer,
	cartOpen: cartOpenReducer,
	purchases: purchasesReducer,
});
