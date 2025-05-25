import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let image_hosting_key=import.meta.env.VITE_image_Hosting_key

let image_hosting_API =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddNewEmployee = () => {

  let link= useNavigate()



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        user_photo: "",
        job_title: "",
        job_type: "",
        salary: "",
        work_shift: "",
      });
    
      
      const [formData2, setFormData2] = useState({
        file: null,
      });


      const handleFileChange = (e) => {
        setFormData2((prev) => ({ ...prev, file: e.target.files[0] }));
      };

    
      // Handle input change
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

     


    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(formData);
      
        let imageFiles = new FormData();
        imageFiles.append("image", formData2.file); // Ensure formData2.file contains the actual file
      
        try {
          // Upload image first
          const res = await axios.post(image_hosting_API, imageFiles, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      
          if (res.data.success) {
            let usersData = {
              name: formData.name,
              email: formData.email,
              user_photo: res.data.data.display_url, // Store uploaded image URL
              job_title: formData.job_title,
              job_type: formData.job_type,
              salary: formData.salary,
              work_shift: formData.work_shift,
            };
            // console.log(usersData)
      
            // Now, send user data to your database
            await axios.post("http://localhost:3000/addemployees", usersData);
            toast.success("Employee added successfully!");
            link("/dashboard/managenewemployee")
            
      
            // Reset form fields
            setFormData({
              name: "",
              email: "",
              user_photo: "",
              job_title: "",
              job_type: "",
              salary: "",
              work_shift: "",
            });
          } else {
            toast.error("Image upload failed.");
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Failed to add employee.");
        } 
      };
      

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-base-200 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold text-center">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Name & Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Profile Photo */}
        <div>
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

          
        </div>

        {/* Job Title & Job Type */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Job Title</label>
            <input
              type="text"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              placeholder="Enter Job Title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">Job Type</label>
            <select
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Job Type</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* Salary & Work Shift */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter Salary"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">Work Shift</label>
            <select
              name="work_shift"
              value={formData.work_shift}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Work Shift</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>
        </div>

        <button
    type="submit"
    className="btn btn-primary w-full flex justify-center items-center"
  >
    Submit
  </button>
      </form>
    </div>
  )
}

export default AddNewEmployee