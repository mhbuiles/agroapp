import { createStore , combineReducers } from 'redux';
import { authReducer } from './authreducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ authReducer });

export const store = createStore( rootReducer, composeWithDevTools());
