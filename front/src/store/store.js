import { createStore , combineReducers } from 'redux';
import { authReducer } from './authreducer';

const rootReducer = combineReducers({ authReducer });

export const store = createStore( rootReducer );

//
// const reducer = ( prevState , action ) => {
//   if ( action.type === "LOGIN" ) {
//     return { authenticated : true }
//   }
//   else if ( action.type === "LOGOUT" ) {
//     return { authenticated : false }
//   }
//   return { authenticated : false }
// }
//
// export default createStore(reducer);
