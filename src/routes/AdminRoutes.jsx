import React, { useContext } from 'react';


import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';
import useAdmin from '../hook/useAdmin';


const AdminRoutes = ({children}) => {
    let {user,loading}= useContext(Context)
    let [isAdmin,adminLoading]= useAdmin()


             let location= useLocation()

    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isAdmin){
        return children
    }


    return <Navigate  to={"/login"} state={{from:location}} replace></Navigate>



    

};

export default AdminRoutes;