import React from 'react'

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../component/CheckoutForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);

const Specificemployee = () => {
  let {id}=useParams()



  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3000/allemployee/${id}`);
    return response.data;
  };

  const { data: specificemployee = [], isLoading:specificemployeeLoading } = useQuery({
    queryKey: ["specificemployee"], // The unique key for this query
    queryFn: fetchUsers, // Function to fetch the data
  });

  let salary=specificemployee.salary
  let email=specificemployee.email




  
  return (
    <div>



      <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm salary={salary} email={email} />
      </Elements>
      </div>
    </div>
  )
}

export default Specificemployee