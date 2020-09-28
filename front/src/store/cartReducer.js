const ADD = 'ADD';
const REMOVE = 'REMOVE';

export function add( product ) {
  return {
    type : ADD,
    payload : product,
  }
}

export function deleteFromCart( product ) {
  return {
    type : REMOVE,
    payload : product,
  }
}

const initialState = {
  products : [],
}

export function cartReducer( prevState = initialState , action ) {
  switch (action.type) {
    case ADD:
      return {
        ...prevState,
        products : [ ...prevState.products , action.payload ],
      };
    case REMOVE:
      return{
        ...prevState,
        products : prevState.products.filter( product => {
          return product._id !== action.payload._id
        })
      };
      break;
    default:
      return prevState;
  }
}
