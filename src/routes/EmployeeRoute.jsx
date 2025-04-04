import React, { useContext } from 'react';


import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';
import useEmployee from '../hook/useEmployee';


const EmployeeRoute = ({children}) => {
    let {user,loading}= useContext(Context)
    let [isemployee,employeeLoading]= useEmployee()


             let location= useLocation()

    if(loading || employeeLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isemployee){
        return children
    }


    return <Navigate  to={"/login"} state={{from:location}} replace></Navigate>



    

};

export default EmployeeRoute;