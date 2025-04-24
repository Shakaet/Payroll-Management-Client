import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const useAdminCount = () => {


    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/adminCount`);
        return response.data;
      };

      
    const { data: admin = [], isLoading:adminLoading } = useQuery({
        queryKey: ["admin"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
  return [admin,adminLoading]
}

export default useAdminCount