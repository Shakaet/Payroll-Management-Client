import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from "../assets/login.json";


import { toast } from 'react-toastify';

import { Context } from '../provider/AuthProvider';
import SocialLogin from '../assets/shared/SocialLogin';


const Login = () => {

  let {loginSetup}=useContext(Context)
  let navigate= useNavigate()
  let location= useLocation()
  const redirectPath = location.state?.from || "/";

 

    let handleSubmit=(e)=>{
        e.preventDefault()

        let email=e.target.email.value
        let password=e.target.password.value
        loginSetup(email, password)
      .then(() => {
        toast.success("Login successfully!");
        navigate(redirectPath);
      })
      .catch((error) => {
        toast.error(error.message || "Failed to login.");
      });

      

      
     
    

    }

   
   
    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Lottie Animation */}
        <div className="flex justify-center items-center">
          <div className="w-60 h-60 md:w-72 md:h-72">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
    
        {/* Login Form */}
        <div className="w-full flex flex-col justify-center">
          <div className="max-w-md w-full p-6 bg-gray-50 dark:bg-gray-700 shadow-lg border-2 border-amber-500 rounded-lg">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-all"
              >
                Login
              </button>
            </form>
    
            {/* Register Link */}
            <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
              <span>Don't have an account? </span>
              <Link to="/register" className="text-blue-500 dark:text-blue-400 hover:underline">
                Register
              </Link>
            </div>
    
            {/* Social Login */}
            <div className="mt-4 flex justify-center">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
    



       
    );
};

export default Login;