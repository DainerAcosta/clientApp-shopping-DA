import { types } from '../types/types';


export const addProductOrder = (product: any) => ({
    type: types.addProductOrder,
    payload: product,
});

export const removeProductOrder = (id: number) => ({
    type: types.removeProductOrder,
    payload: id,
});

export const removeOneProductOrder = (product: any) => ({
    type: types.removeOneProductOrder,
    payload: product,
});

export const removeOrder = () => ({
    type: types.removeOrder,
});