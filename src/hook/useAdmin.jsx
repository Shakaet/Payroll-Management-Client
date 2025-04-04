import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';





const useAdmin = () => {


    let {user}= useContext(Context)



    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/users/admin/${user?.email}`);
        return response.data?.admin;
      };

   
    const { data: isAdmin = [], isLoading:adminLoading } = useQuery({
        queryKey: [user?.email,"isAdmin"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
    

    return [isAdmin,adminLoading]
};

export default useAdmin;