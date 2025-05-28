import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AddTask = () => {

    let nav=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    const formData = {
      email: e.target.email.value,
      taskTitle: e.target.taskTitle.value,
      taskDescription: e.target.taskDescription.value,
      dueDate: e.target.dueDate.value,
      status:"pending"
    };
    // console.log(formData)

    try {
        await axios.post("https://payroll-management-system-server.vercel.app/addtask",formData);
        Swal.fire("Success", "Attendance added successfully", "success");
        nav("/dashboard/managetask")
    } catch (error) {
        Swal.fire("Error", error.response.data.message || "Failed to add attendance", "error");
    }




    
   
};
  return (
    <div>

<div className="flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6">Add New Task</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="text-gray-700 font-medium">Employee Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter employee email"
                                    name='email'
                                    required
                                    className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-gray-700 font-medium">Task Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter task title"
                                    name="taskTitle"
                                    
                                    required
                                    className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-gray-700 font-medium">Task Description</span>
                                </label>
                                <textarea
                                    placeholder="Enter task description"
                                     name="taskDescription"
                                    
                                    required
                                    className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 rounded-lg p-2 h-24 resize-none"
                                ></textarea>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-gray-700 font-medium">Due Date</span>
                                </label>
                                <input
                                    type="date"
                                     name="dueDate"
                                    
                                    required
                                    min={new Date().toISOString().split('T')[0]} // Prevents past dates
                                    className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 rounded-lg p-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-2 rounded-lg transition duration-300"
                            >
                                Add Task
                            </button>
                        </form>
                    </div>
                </div>
    </div>
  )
}
