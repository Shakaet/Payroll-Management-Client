import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import { Context } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const fetchUsers = async () => {
  const response = await axios.get(`https://payroll-management-system-server.vercel.app/api/leave-request`);
  return response.data;
};


const LeaveApplication = () => {


  


  const { data: leaveReqData = [], isLoading:leaveReqLoading,refetch } = useQuery({
    queryKey: ["leaveReqData"], // The unique key for this query
    queryFn: fetchUsers, // Function to fetch the data
  });

  // Handle status update
  const handleStatusChange = async (id, newStatus,email) => {
    try {
      await axios.patch(`https://payroll-management-system-server.vercel.app/api/data/${id}?email=${email}`, { status: newStatus }); // Replace with your PATCH endpoint
      
          Swal.fire({
          title: "Updated!",
          text: "Request Updated Successful!",
          icon: "success"
        });
      
      refetch()
      
     
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };


  let handleDelete=async(id)=>{

    try {
      await axios.delete(`https://payroll-management-system-server.vercel.app/api/leave-request/${id}`);
      alert("Request Deleted Successfully");
      refetch();
    } catch (error) {
      // console.error('Error deleting request:', error);
      // alert("Failed to delete request");
    }




  }


  return (
    <div>

<div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-400">Employee's Leave Request</h2>
      <div className="overflow-x-auto rounded-2xl">
        <table className="table w-full rounded-2xl">
          <thead>
            <tr className="bg-gray-200">
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-400">
            {leaveReqData.map((item) => (
              <tr key={item._id} className="">
                <td className="font-semibold">{item.email}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>
                  <select
                    value={item.status}
                    onChange={(e) => handleStatusChange(item._id, e.target.value,item?.email)}
                    className="select select-bordered select-sm w-full max-w-xs"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
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

export default LeaveApplication