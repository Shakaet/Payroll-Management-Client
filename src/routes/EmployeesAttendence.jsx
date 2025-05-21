import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import Loading from '../component/loading';

const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:3000/allatendence");
    return data;
  };

const EmployeesAttendence = () => {

     const { data:employees, isLoading,refetch } = useQuery({
            queryKey: ["employees"], // Unique key for caching
            queryFn: fetchPosts, // Function to fetch data
          });

    if(isLoading){

        return <Loading></Loading>
    }

    
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Employee Attendance</h2>
      <div className="overflow-x-auto">
        <table className="table w-full rounded-4xl">
          <thead>
            <tr className="bg-gray-200">
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-400">
            {employees.map((employee, index) => (
              <tr key={index} className="hover">
                <td className="font-semibold">{employee.employeeEmail}</td>
                <td>{employee.date}</td>
                <td>
                  <span
                    className={`badge ${
                      employee.status === "Present" ? "badge-success" : "badge-error"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeesAttendence