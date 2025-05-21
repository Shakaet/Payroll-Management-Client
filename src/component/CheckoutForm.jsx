import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { Context } from '../provider/AuthProvider';
import useAxios from '../hook/useAxios';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({salary,email}) => {

  let axiosInstance= useAxios()

  let nav= useNavigate()



    let {user}=useContext(Context)

    const stripe = useStripe();
    const elements = useElements();
    // console.log(email)

    let [error,setError]= useState('')
  let [clientSecret,setclientSecret]=useState('')
  let [transectionId,settransectionId]=useState('')

  useEffect(()=>{

    if(salary>0){
      axiosInstance.post("/createPaymentIntent",{price:salary})
    .then(res=>{
        console.log(res.data.clientSecret)
        setclientSecret(res.data.clientSecret)

    })
    }

    
  },[salary,axiosInstance])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }

    //confirm payment

    let {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email || "anonymous",
                name:user?.displayName || "anonymous"

            }
        }
    })

    if(confirmError){
        console.log("confirm error")
    }
    else{
        console.log("payment intent",paymentIntent)
        if(paymentIntent.status==="succeeded" ){

          console.log("transectionId: ",paymentIntent.id)
          settransectionId(paymentIntent.id)



          let PaymentItem={
            transectionId:paymentIntent.id,
            sender_email:user?.email,
            rec_email:email,
            price:salary,
            date:new Date(),
            status:"pending"


          }


          let res=await axiosInstance.post("/payments",PaymentItem)
           console.log(res.data)
        //    refetch()
           
           if(res.data?.intertedPayment?.insertedId){
            Swal.fire({
              title: "Payment Successful!",
              icon: "success",
              draggable: true
            });
            nav("/dashboard/paymentHistory")
            
            
           }
        }
    }


   


    
  };

    

  return (
//     <div>

// <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className='btn btn-primary mt-5' type="submit"disabled={!stripe || !clientSecret} >
//         Pay
//       </button>
//       <p className='text-red-600 font-bold my-4'>{error}</p>
//       {
//         transectionId && <p className='text-green-600'>Your transection id= {transectionId}</p>
//       }
      
//     </form>



//     </div>

<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
  <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Secure Payment</h2>

  <form onSubmit={handleSubmit}>
    <div className="mb-4 p-4 border rounded-md">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              fontFamily: 'monospace, sans-serif',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#e53935',
            },
          },
        }}
      />
    </div>

    <button
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300 disabled:bg-indigo-300"
      type="submit"
      disabled={!stripe || !clientSecret}
    >
      Pay Now
    </button>

    {error && (
      <p className="text-red-600 font-semibold text-center mt-4">{error}</p>
    )}

    {transectionId && (
      <p className="text-green-600 font-semibold text-center mt-4">
        ✅ Payment Successful! Transaction ID: <span className="font-mono">{transectionId}</span>
      </p>
    )}
  </form>
</div>

  )
}

export default CheckoutForm