import { combineReducers } from 'redux';

import { listProductsReducer } from './listProductsReducer';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from './checkoutReducer';


export const rootReducer = combineReducers({
    listProd: listProductsReducer,
    cart: cartReducer,
    check: checkoutReducer,
});