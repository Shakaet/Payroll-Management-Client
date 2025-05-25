import axios from 'axios';
import React, { useContext } from 'react'
import { Context } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';



export const MyTask = () => {

    let {user}=useContext(Context)

    // console.log(user)

    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/mytask/${user?.email}`);
        return response.data;
      };

      

      const { data: mytask = [], isLoading:taskLoading,refetch } = useQuery({
        queryKey: [user?.email,"mytask"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

      const handleStatusChange = async (taskId, newStatus) => {
        try {
          await axios.patch(`http://localhost:3000/mytask/${taskId}`, { status: newStatus });
          refetch()
          
         
        } catch (error) {
          console.error("Failed to update status:", error);
        }
      };


     


      const isPastDue = (dueDate) => {
        const currentDate = new Date();
        const taskDueDate = new Date(dueDate);
        return currentDate > taskDueDate;
      };

       if(!mytask  || Object.keys(mytask).length === 0){
      return <div className="flex items-center justify-center h-screen">
      <p className="text-4xl md:text-6xl font-extrabold text-center text-pink-600 shadow-lg px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-md">
        No Task Today for You!
      </p>
    </div>

       }

      
    
    
    
  return (
    <div>


<div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Task List</h2>
      
      
        <div className="overflow-x-auto rounded-2xl">
          <table className="table w-full rounded-2xl">
            <thead>
              <tr className="bg-gray-200">
              <th className="border p-3">Task no</th>
                <th className="border p-3">Task Title</th>
                <th className="border p-3">Description</th>
                <th className="border p-3">Due Date</th>
                <th className="border p-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {mytask.map((task, index) => (
                <tr key={task._id} className="bg-gray-400">
                    <td className="border p-3">{index+1}</td>
                  <td className="border p-3">{task.taskTitle || "N/A"}</td>
                  <td className="border p-3">{task.taskDescription || "N/A"}</td>
                  <td className="border p-3">{task.dueDate || "N/A"}</td>
                  <td className="border p-3">
                    <select
                      value={task.status}
                      onChange={(e) => handleStatusChange(task._id, e.target.value)}
                      disabled={isPastDue(task.dueDate)|| task.status==="complete"}
                      
                      className="select select-bordered w-full max-w-xs bg-white"
                    >
                      <option value="pending">Pending</option>
                      <option value="complete">Complete</option>
                    </select>
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
