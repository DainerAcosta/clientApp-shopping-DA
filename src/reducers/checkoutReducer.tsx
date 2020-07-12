import { types } from '../types/types';

const initialState = {
    user: {},
    email_existing: '',
    isLoading: false,
    state: false,
    isLoadingBuy: false,
    msn: '',
    stateBuy: false,
}

export const checkoutReducer = (state=initialState, action: any) => {
    switch (action.type) {

        case types.getUserTry:
            return {
                ...state,
                email_existing: action.payload,
                isLoading: true,
            }

        case types.getUserFailed:
            return {
                ...state,
                isLoading: false
            }

        case types.getUserSuccess:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                state: true,
            }
        
        case types.resetLookupUser:
            return {
                user: {},
                email_existing: '',
                isLoading: false,
                state: false,
            }
        
        case types.resetStateBuy:
            return {
                ...state,
                stateBuy: false
            }
        
        case types.postBuyUserNewTry:
            return {
                ...state,
                isLoadingBuy: true,
            }
        
        case types.postBuyUserNewFailed:
            return {
                ...state,
                isLoadingBuy: false
            }

        case types.postBuyUserNewSuccess:
            return {
                ...state,
                user: {},
                email_existing: '',
                isLoadingBuy: false,
                state: false,
                msn: action.payload,
                stateBuy: true
            }
    
        default:
            return state;
    }
};