import { takeEvery, takeLatest, all, spawn } from 'redux-saga/effects'
import { types as type } from '../types/types';
import { listProductsSaga } from './products/productsSaga';
import { getUserSaga, fetchOrderAndUser } from './checkout/checkoutSaga';


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield takeEvery(type.getListProductsTry, listProductsSaga);
    yield takeEvery(type.getUserTry, getUserSaga);
    yield takeEvery(type.postBuyUserNewTry, fetchOrderAndUser);
}

