const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


export function login() {
  return {
    type : LOGIN,
  }
}

export function logout() {
  return {
    type : LOGOUT,
  }
}

const initialState = {
  authenticated : false,
}

export function authReducer( prevState = initialState , action ) {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated : true
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
