import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

let image_hosting_key = import.meta.env.VITE_image_Hosting_key;
let image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateEmployee = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    user_photo: '',
    job_title: '',
    job_type: '',
    salary: '',
    work_shift: '',
  });

  let nav= useNavigate()

  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/employees/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let updatedData = { ...formData };

      if (file) {
        let imageFiles = new FormData();
        imageFiles.append('image', file);
        const res = await axios.post(image_hosting_API, imageFiles, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (res.data.success) {
          updatedData.user_photo = res.data.data.display_url;
        } else {
          toast.error('Image upload failed.');
          return;
        }
      }

      await axios.patch(`http://localhost:3000/updateemployee/${id}`, updatedData);
      toast.success('Employee updated successfully!');
      nav("/dashboard/managenewemployee")
    } catch (error) {
      console.error('Error updating employee:', error);
      toast.error('Failed to update employee.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-base-200 shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold text-center">Update Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="label">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="input input-bordered w-full" required />
          </div>
        </div>
        <div>
          <label className="block">Profile Photo</label>
          <input type="file" onChange={handleFileChange} className="file-input file-input-bordered w-full" required/>

        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Job Title</label>
            <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="label">Job Type</label>
            <select name="job_type" value={formData.job_type} onChange={handleChange} className="select select-bordered w-full" required>
              <option value="">Select Job Type</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Salary</label>
            <input type="number" name="salary" value={formData.salary} onChange={handleChange} className="input input-bordered w-full" required />
          </div>
          <div>
            <label className="label">Work Shift</label>
            <select name="work_shift" value={formData.work_shift} onChange={handleChange} className="select select-bordered w-full" required>
              <option value="">Select Work Shift</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
