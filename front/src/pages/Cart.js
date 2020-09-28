import React from 'react';
import { useSelector } from 'react-redux';
import '../components/ComponentsCSS/Cart.css';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../store/cartReducer';


function Cart() {

  const dispatch = useDispatch();

  const products = useSelector( state => state.cartReducer.products );
  const name = useSelector( state => state.authReducer.name );
  const lname = useSelector( state => state.authReducer.lname );
  const phone = parseInt(useSelector( state => state.authReducer.phone ));
  const email = useSelector( state => state.authReducer.email );
  const address = useSelector( state => state.authReducer.address );
  const id_number = parseInt(useSelector( state => state.authReducer.id_number));

  let total = 0;
  for ( let value of products ) {
    total = total + parseInt(value.price);
  }

    function handlePayment() {
      const paymentHandler = window.ePayco.checkout.configure({
        key : process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
        test : true
      })

      paymentHandler.open({
        external : 'false',
        amount : `${total}`,
        tax : '0',
        tax_base : '0',
        name : 'Compra AgroApp',
        description : 'Del campo a tu casa',
        currency : 'cop',
        country : 'CO',
        lang : 'en',
        extra1 : 'extra1',
        response : `${process.env.REACT_APP_URL}/response`,
        autoclick : 'false',
        name_billing : `${name} ${lname}`,
        adress_billing : `${address}`,
        email_billing : `${email}`,
        type_doc_billing : 'CC',
        mobile_phone_billing : `${phone}`,
        number_doc_billing : `${id_number}`,
      })
    }

    function deleteProduct(product) {
      dispatch(deleteFromCart(product));
    }

  return (
    <div className = 'cartBig'>
      <h1>Mi carrito de compras</h1>
      <div className='cartCont'>
        { products.map( product => {
          return <div key = {product._id} className = 'cartProductInfo'>
            <div className = 'cartProductInfoText'>
              <p className = 'cartInfoText'>{product.name}</p>
              <p className = 'cartInfoText'>{product.price}</p>
              <div className = 'deleteProdCart' onClick = { () => deleteProduct(product) } >X</div>
            </div>
            <img src = {product.image} className = 'prodImageMy'alt = ''/>
          </div>
        })}
      </div>
      <h3>Total carrito: $ {total} Pesos</h3>
      <button className = 'cartPay' onClick = {handlePayment}>Pagar</button>
    </div>
  )
}

export default Cart;
