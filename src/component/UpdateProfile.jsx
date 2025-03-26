import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Context } from "../provider/AuthProvider";




const image_hosting_key = import.meta.env.VITE_image_Hosting_key;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(Context);
  const [name, setName] = useState(user?.displayName || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required!");
      return;
    }

    if (!file) {
      setError("Please select an image file!");
      return;
    }

    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(image_hosting_API, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        const newPhotoURL = res.data.data.display_url;

        await updateUserProfile(user, { displayName: name, photoURL: newPhotoURL });
        setSuccess("Profile updated successfully!");
        setTimeout(() => navigate("/dashboard/myprofile"), 1000);
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      setError("There was an error uploading your image. Please try again.");
    }
  };

 
 


  return (
    <div className={`min-h-screen gap-24 flex flex-col md:flex-row items-center justify-center p-6  bg-[#111827]  rounded-lg`}>
      
     

      {/* Update Profile Form */}
      <div className={`bg-white text-black max-w-lg w-full  mt-20 shadow-xl rounded-3xl p-8 space-y-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl md:w-1/2`}>
        <h1 className="text-4xl font-extrabold text-center  mb-6">
          Update Your Profile
        </h1>
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold  dark:text-gray-300 mb-2">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full p-4 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-800 dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 shadow-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold  dark:text-gray-300 mb-2">Photo</span>
            </label>
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              name="img"
              required
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-100 hover:file:bg-purple-200 dark:file:bg-purple-600 dark:hover:file:bg-purple-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 focus:ring-2 focus:ring-purple-600 transition-all duration-300 dark:from-purple-700 dark:to-pink-600"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>

  
  
  );
};

export default UpdateProfile;