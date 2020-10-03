const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const DELETEPRODUCT = 'DELETEPRODUCT';


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

export function deleteProdPl( product ) {
  return {
    type : DELETEPRODUCT,
    payload : product,
  }
}

const initialState = {
  authenticated : false,
  name : '',
  lname : '',
  email : '',
  phone : '',
  products : [],
  id_number : '',
  address : '',
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
        products : action.payload.products,
        userID : action.payload._id,
        id_number : action.payload.id_number,
        address : action.payload.address,
      };
    case LOGOUT:
      return {
        authenticated : false
      };
    case DELETEPRODUCT:
      return {
        ...prevState,
        products : prevState.products.filter( product => {
          return product._id !== action.payload._id
        })
      }
    default:
      return prevState;
  }
}
