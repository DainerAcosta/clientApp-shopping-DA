import { put, call, CallEffect, PutEffect } from 'redux-saga/effects'
import { types as type } from '../../types/types';
import { apiCall } from '../../helpers/fetchApp';


export function* getUserSaga(payload: any): Generator<CallEffect<any> | PutEffect<{
    type: string;
    payload?: any;
}>, void, [any]> {
    try {
        const URL = 'http://localhost:3001/buy/user';
        const [ response ] = yield call(apiCall, 'POST', URL, JSON.stringify(payload));
        //const data = yield call([response, 'json']);
        yield put({ type: type.getUserSuccess, payload:  response})
    } catch (error) {
        yield put({ type: type.getUserFailed})
        console.log(error);
    }
    
}

export function* fetchOrderAndUser(payload: any): Generator<CallEffect<any> | PutEffect<{
    type: string;
    payload?: any;
}>, void, [any]> {
    try {
        console.log(payload);
        const URL = 'http://localhost:3001/buy';
        const response = yield call(apiCall, 'POST', URL, JSON.stringify(payload));
        yield put({ type: type.postBuyUserNewSuccess, payload:  response})
    } catch (error) {
        yield put({ type: type.postBuyUserNewFailed})
        console.log(error);
    }
    
}