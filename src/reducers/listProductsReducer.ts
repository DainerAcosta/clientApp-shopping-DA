import { types } from '../types/types';

const initialState = {
    products: [],
    isLoading: false,
}

export const listProductsReducer = (state=initialState, action: any) => {
    switch (action.type) {

        case types.getListProductsTry:
            return {
                ...state,
                isLoading: true
            }

        case types.getListProductsFailed:
            return {
                ...state,
                isLoading: false
            }

        case types.getListProductsSuccess:
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
    
        default:
            return state;
    }
};