import { createStore , combineReducers } from 'redux';
import { authReducer } from './authreducer';

const rootReducer = combineReducers({ authReducer });

export const store = createStore( rootReducer );
