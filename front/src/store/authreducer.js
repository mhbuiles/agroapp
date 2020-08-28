const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export function login( user ) {
  return {
    type : LOGIN,
    payload : user,
  }
}

export function logout() {
  return {
    type : LOGOUT,
  }
}

const initialState = {
  authenticated : false,
  name : '',
  lname : '',
  email : '',
  phone : '',
}

export function authReducer( prevState = initialState , action ) {
  switch (action.type) {
    case LOGIN:
      return {
        ...prevState,
        authenticated : true,
        name : action.payload.name,
        lname : action.payload.lname,
        email : action.payload.email,
        phone : action.payload.phone,
      };
    case LOGOUT:
      return {
        authenticated : false
      }
      break;
    default:
      return prevState;
  }
}
