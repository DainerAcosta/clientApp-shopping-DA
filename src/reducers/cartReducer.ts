import { types } from '../types/types';

const initialState: any = {
    order: [],
    priceTotal: 0,
}

export const cartReducer = (state=initialState, action: any) => {
    switch (action.type) {

        case types.addProductOrder:
            return {
                ...state,
                order: (() => {
                    let filterOrder = state.order.filter((product: any) => (product.id === action.payload.id));
                    if (filterOrder.length > 0) {
                        let position = 0;
                        for (let i = 0; i < state.order.length; i++) {
                            if (state.order[i].id === action.payload.id) {
                                position = i;
                                break 
                            }
                        }
                        state.order[position].quantity += 1;
                    } else {
                    const { 
                        id,
                        image,
                        name_product,
                        price,
                        category,
                        description } = action.payload;
                    
                    const newProduct = { 
                        id,
                        image,
                        name_product,
                        price,
                        category,
                        description,
                        quantity: 1 };
            
                        state.order = [...state.order, newProduct]        
                    }
                    return state.order;
                })(),
                priceTotal: (state.priceTotal + action.payload.price),
            }

        case types.removeProductOrder:
            return {
                ...state,
                order: state.order.filter((product: any) => (product.id !== action.payload)),
                priceTotal: (() => {
                    const [ productRemove ] = state.order.filter((product: any) => (product.id === action.payload));
                    return (state.priceTotal - (productRemove.quantity * productRemove.price));
                })(),
            }

        case types.removeOneProductOrder:
            return {
                ...state,
                order: (() => {
                    for (let i = 0; i < state.order.length; i++) {
                        if (state.order[i].id === action.payload.id) {
                            state.order[i].quantity -= 1;
                            if (state.order[i].quantity === 0) {
                                state.order.splice(i, 1);
                            }
                            break;
                        }
                    }
                    return state.order;
                })(),
                priceTotal: state.priceTotal - action.payload.price,
            }
        
        case types.removeOrder:
            return {
                order: [],
                priceTotal: 0,
            }
    
        default:
            return state;
    }
};