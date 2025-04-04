import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';





const useEmployee = () => {


    let {user}= useContext(Context)



    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/users/employee/${user?.email}`);
        return response.data?.employee;
      };

      

   
    const { data: isemployee = [], isLoading:employeeLoading } = useQuery({
        queryKey: [user?.email,"isEmployee"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

    
    
    

    return [isemployee,employeeLoading]
};

export default useEmployee;