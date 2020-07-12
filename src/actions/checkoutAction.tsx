import { types } from '../types/types';


export const getUserCheckout = (email_existing: string) => ({
    type: types.getUserTry,
    payload: email_existing,
});

export const resetLookupUser = () => ({
    type: types.resetLookupUser,
});

export const postFetchBuyUserNew = (userAndBuy: any) => ({
    type: types.postBuyUserNewTry,
    payload: userAndBuy,
});

export const postFetchBuyUserExisting = (userAndBuy: any) => ({
    type: types.postBuyUserNewTry,
    payload: userAndBuy,
});

export const resetStateBuy = () => ({
    type: types.resetStateBuy,
});