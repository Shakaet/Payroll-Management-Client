import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const MyProfile = () => {


    const { user } = useContext(Context);


    
 



  
 
  



  return (
     <div className={`flex items-center justify-center min-h-screen   rounded p-6`}>
           
    
      <div className="w-full max-w-2xl mx-auto p-8 rounded-2xl bg-yellow/20 backdrop-blur-lg shadow-[0px_10px_30px_rgba(255,255,255,0.2),0px_-10px_30px_rgba(255,255,255,0.2)]">
        <div className="flex flex-col items-center text-center">
          {/* User Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="mt-4">
            <h2 className={`text-3xl  text-white font-bold`}>{user?.displayName || "Guest User"}</h2>
            <p className={`text-lg  text-gray-200  font-bold mt-1`}>{user?.email || "guest@example.com"}</p>
          </div>

          {/* Update Profile Button */}
          <div className="mt-6">
            <Link
              to={"/dashboard/updateprofile"}
              className={`bg-[#06B6D4]    text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.6)] transition duration-300 transform hover:scale-105`}
            >
              Update Profile
            </Link>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default MyProfile;