import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import useAxios from '../hook/useAxios';

const PaymentHistory = () => {


  let axiosInstance= useAxios()


    const fetchUsers = async () => {
        const response = await axiosInstance.get(`/allpaymentHistory`);
        return response.data;
      };

   
    const { data: paymentHistory = [], isLoading:paymentHistoryLoading } = useQuery({
        queryKey: ["paymentHistory"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
  return (
    <div>

<div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">All Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="table w-full rounded-4xl">
          <thead>
            <tr className="bg-gray-200">
               <th>no</th>
              <th>Transaction ID</th>
              <th>Receiver Email</th>
              <th>Salary ($)</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-400">
            {paymentHistory.map((transaction, index) => (
              <tr key={index} className="hover">
                <td className="font-semibold">{index+1}</td>
                <td className="font-semibold">{transaction.transectionId}</td>
                <td>{transaction.rec_email}</td>
                <td className="font-semibold">${transaction.price}</td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>
                  <span
                    className={`badge ${
                      transaction.status === 'pending'
                        ? 'badge-warning'
                        : 'badge-success'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>







    </div>
  )
}

export default PaymentHistory