import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import animationData from "../assets/register.json";
import { Context } from '../provider/AuthProvider';
import SocialLogin from '../assets/shared/SocialLogin';






let image_hosting_key=import.meta.env.VITE_image_Hosting_key

let image_hosting_API =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Registered = () => {

  let link= useNavigate()
       
       let {createRegistered,updateUserProfile}= useContext(Context)
    const [formData, setFormData] = useState({
        file: null,
      });

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
      };


      let handleSubmit = async (e) => {
        e.preventDefault();
      
        // Get form data
        let name = e.target.name.value;
        let email = e.target.email.value;
        let img = formData.file;
        let password = e.target.password.value;
      
        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      
        
        if (password.length < 8) {
          toast.error('Password must be at least 8 characters long.');
          return; 
        }
      
        if (!/[a-z]/.test(password)) {
          toast.error('Password must contain at least one lowercase letter.');
          return; 
        }
      
        if (!/[A-Z]/.test(password)) {
          toast.error('Password must contain at least one uppercase letter.');
          return; 
        }
      
        if (!/\d/.test(password)) {
          toast.error('Password must contain at least one number.');
          return; 
        }
      
        if (!/[!@#$%^&*]/.test(password)) {
          toast.error('Password must contain at least one special character (!, @, #, $, %, ^, &, *).');
          return; 
        }
      
       
        let imageFiles = { image: formData.file };
      
        // Image upload request
        axios.post(image_hosting_API, imageFiles, {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        })
        .then(res => {
          if (res.data.success) {
            let usersData={
              name:name,
              email:email,
              user_photo:res.data.data.display_url,
              role:"employee"

          }

            let profileUpdates={
              displayName: name,
              photoURL: res.data.data.display_url
            }
            createRegistered(email,password)
            .then((res)=>{
              updateUserProfile(res.user,profileUpdates)
              .then((result)=>{
               toast.success("Profile Updated")
              
            axios.post("http://localhost:3000/users",usersData)
            .then((res)=>{
                if(res.data.insertedId){
                    // alert("user added")
                    
                }
            })
            .catch((error)=>{
                // alert("user already existed")
            })
              })
              .catch((error)=>{
                // console.log(error)
      
              })
              e.target.reset();
              link("/")
            })

            

            // toast.success('Image uploaded successfully!');
          }
        })
        .catch(error => {
          console.error('Error uploading image:', error);
          toast.error('There was an error uploading your image. Please try again.');
        });
      };



        

  
    return (
      <div className="min-h-screen flex items-center justify-center  px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-24">
        {/* Lottie Animation */}
        <div className="flex justify-center items-center">
          <div className="w-60 h-60 md:w-72 md:h-72">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>

        {/* Registration Form */}
        <div className="w-full border-2 border-amber-500 p-7 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-2 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Profile photo upload */}
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300">Profile Photo</span>
              <input
                type="file"
                name="img"
                required
                onChange={handleFileChange}
                className="block w-full mt-1 text-sm text-gray-900 dark:text-gray-300
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-100 dark:file:bg-blue-700
                  file:text-blue-600 dark:file:text-white
                  hover:file:bg-blue-200 dark:hover:file:bg-blue-600"
              />
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full px-4 py-2 border text-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-all"
            >
              Register
            </button>
          </form>

          {/* Already have an account */}
          <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
            <span>Already have an account? </span>
            <Link to="/login" className="text-blue-500 dark:text-blue-400 hover:underline">
              Login
            </Link>
          </div>

          {/* Social Login */}
          <div className="mt-4">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>

    );
};

export default Registered;