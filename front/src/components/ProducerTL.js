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

  useEffect( () => {
    axios({
      method : 'GET',
      url : 'http://localhost:8000/transactions',
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
      <img className='prodTlProfilePic' src = 'https://img2.freepng.es/20180331/fze/kisspng-computer-icons-user-profile-avatar-user-5abf13fab81250.112035111522471930754.jpg' alt=""></img>
      <h3>{name} {lname}</h3>
      <h3>Mis transacciones</h3>
      <hr/>
      <Transactions className='prodTlTransactionsCont' transacts = {transactions}></Transactions>
      <hr></hr>
      <button className='prodTlButtonReturn'>
        <Link to = '/UserProfile'>Regresar</Link>
      </button>
    </div>
  )
}

export default ProducerTL;
