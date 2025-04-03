import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';


const PrivateRoute = ({children}) => {

      let {user,loading}= useContext(Context)
      const location = useLocation()

      if(loading){
        return <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
      
      }

      if(user){
        return children
      }


    return   <Navigate  state={{from:location.pathname}} to="/login"></Navigate>
};

export default PrivateRoute;