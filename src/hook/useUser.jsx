import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const useUser = () => {

    const fetchUsers = async () => {
        const response = await axios.get(`https://payroll-management-system-server.vercel.app/userCount`);
        return response.data;
      };

      
    const { data: users = [], isLoading:usersLoading } = useQuery({
        queryKey: ["users"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });


  return [users,usersLoading]
}

export default useUser