import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const useTask = () => {


    const fetchUsers = async () => {
        const response = await axios.get(`https://payroll-management-system-server.vercel.app/alltask`);
        return response.data;
      };

      
    const { data: task = [], isLoading:taskLoading } = useQuery({
        queryKey: ["task"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
  return [task,taskLoading]
}

export default useTask