import { createStore , combineReducers } from 'redux';
import { authReducer } from './authreducer';
import { cartReducer } from './cartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ authReducer , cartReducer });

export const store = createStore( rootReducer, composeWithDevTools());
