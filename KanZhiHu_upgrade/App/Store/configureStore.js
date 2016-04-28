/**
 * Created by apple on 16/2/15.
 */

'use strict';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState:any) {
    return createStoreWithMiddleware(reducer, initialState);
}