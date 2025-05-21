import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';

const ManageTask = () => {



    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/alltask`);
        return response.data;
      };

      const { data: alltask = [], isLoading:taskLoading,refetch } = useQuery({
        queryKey: ["alltask"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

      const handleDelete = (taskId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axios
                .delete(`http://localhost:3000/alltask/${taskId}`)
                .then((response) => {
                  refetch()
                  Swal.fire("Deleted!", "Your item has been deleted.", "success");
                  console.log(response.data); // Handle UI update if needed
                })
                .catch((error) => {
                  Swal.fire("Error!", "Something went wrong.", "error");
                  console.error("Error deleting:", error);
                });
            }
          });
      };


  return (

    
    <div>

<h3 className="text-2xl font-bold text-white mb-4 text-center">Task List</h3>
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-gray-700">Task Title</th>
                <th className="px-4 py-2 text-left text-gray-700">Description</th>
                <th className="px-4 py-2 text-left text-gray-700">Due Date</th>
                <th className="px-4 py-2 text-left text-gray-700">Status</th>
                <th className="px-4 py-2 text-left text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className='bg-gray-400'>
              {alltask.map((task) => (
                <tr key={task._id} className="border-b">
                  <td className="px-4 py-2">{task.email}</td>
                  <td className="px-4 py-2">{task.taskTitle}</td>
                  <td className="px-4 py-2">{task.taskDescription}</td>
                  <td className="px-4 py-2">{task.dueDate}</td>
                  <td className="px-4 py-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                      task.status === 'complete' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="btn btn-sm btn-error bg-red-500 hover:bg-red-600 text-white rounded-lg"
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

     

    
  )
}

export default ManageTask