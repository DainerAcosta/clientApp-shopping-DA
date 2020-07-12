import { put, call } from 'redux-saga/effects'
import { types as type } from '../../types/types';


export function* listProductsSaga() {
    try {
        const URL = 'http://localhost:3001/products';
        const response = yield call(fetch, URL);
        const data = yield call([response, 'json']);
        yield put({ type: type.getListProductsSuccess, payload:  data})
    } catch (error) {
        yield put({ type: type.getListProductsFailed})
        console.log(error);
    }
    
}