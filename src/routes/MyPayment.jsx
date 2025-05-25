import axios from 'axios';
import React, { useContext } from 'react'
import { Context } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const MyPayment = () => {


    let {user}= useContext(Context)

    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/mypaymentHistory/${user?.email}`);
        return response.data;
      };

   
    const { data: myPayment = [], isLoading: myPaymentLoading,refetch } = useQuery({
        queryKey: [user?.email," myPayment"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

      const handleStatusChange = async (id, newStatus) => {
        console.log(newStatus);
        try {
          const response = await axios.patch(`http://localhost:3000/myPayment/${id}`, {
            status: newStatus
          });

          if (response.status === 200) {

            refetch()

            
          
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Status updated successfully',
              confirmButtonText: 'OK'
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to update status',
              confirmButtonText: 'OK'
            });
          }
        } catch (error) {
          console.error('Error updating status:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error updating status',
            confirmButtonText: 'OK'
          });
        }
      };


       if(myPayment?.length===0){
      return <div className="flex items-center justify-center h-screen">
      <p className="text-4xl md:text-6xl font-extrabold text-center text-pink-600 shadow-lg px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-md">
        No Payment History Available for You!
      </p>
    </div>

       }


  return (
    <div>


<div className="overflow-x-auto p-4">
          <h2 className="text-2xl font-bold text-center mb-4 text-white">Transaction Listings</h2>
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full rounded-2xl">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-4 text-left">Transaction ID</th>
                  <th className="py-3 px-4 text-left">Sender Email</th>
                  <th className="py-3 px-4 text-left">Salary ($)</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="bg-gray-400">
                {myPayment.map((transaction) => (
                  <tr key={transaction._id} className="">
                    <td className="py-3 px-4 font-semibold">{transaction.transectionId}</td>
                    <td className="py-3 px-4">{transaction.sender_email}</td>
                    <td className="py-3 px-4 font-semibold">${transaction.price.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      {transaction.status === "payment received" ? (
                        <span className="text-sm">Payment Received</span>
                      ) : (
                        <select
                          value={transaction.status}
                          onChange={(e) => handleStatusChange(transaction._id, e.target.value)}
                          className="border rounded px-2 py-1 bg-white text-sm"
                        >
                          <option value="payment sent">Payment Sent</option>
                          <option value="payment received">Payment Received</option>
                        </select>
                      )}
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

export default MyPayment