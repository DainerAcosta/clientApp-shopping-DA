import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducers/rootReducers';
import rootSaga from '../sagas/rootSaga';

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(
    rootReducer,
    composeEnhancers( 
        applyMiddleware( sagaMiddleware ) 
    )
);

sagaMiddleware.run(rootSaga);