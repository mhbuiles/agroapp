import React , { useEffect , useState } from 'react';
import {
  Link
} from 'react-router-dom';
import './ComponentsCSS/ProducerTL.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Transactions from './Transactions';


function ProducerTL() {

  const [ transactions , setTransactions ] = useState( [] );
  const name = useSelector( state => state.authReducer.name );
  const lname = useSelector( state => state.authReducer.lname );
  const image = useSelector( state => state.authReducer.image );

  useEffect( () => {
    axios({
      method : 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url : '/transactions',
      headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then( (  data  ) => {
      setTransactions( data.data );
    })
    .catch( ( error ) => {
      console.log(error);
    })
  } , [] );

  return(
    <div className = 'prodTlContainer ProducerTL flexible-col justify-content-center align-items-center' >
    <hr/>
      <img className='prodTlProfilePic' src = {image} alt=""></img>
      <h3 className = 'blue'>{name} {lname}</h3>
      <h3 className = 'prodTlTitle'>Mis transacciones</h3>
      <hr/>
      <div className='prodTlTransactionsCont' >
        <Transactions transacts = {transactions}></Transactions>
      </div>
      <hr></hr>
      <button className='prodTlButtonReturn'>
        <Link to = '/UserProfile'>Regresar</Link>
      </button>
    </div>
  )
}

export default ProducerTL;
