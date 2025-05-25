import React, { useState } from 'react';
import axios from 'axios';
import { Context } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const DailyUpdates = () => {

  
  const [formData, setFormData] = useState({
    tasksCompleted: '',
    hoursWorked: '',
    issuesFaced: '',
    nextDayPlan: '',
    remarks: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await axios.post('http://localhost:3000/api/submitReport', formData);

      if (response.status === 200) {
        Swal.fire({
          title: "Daily Update Report sent Successfully!",
          text: "You clicked the button!",
          icon: "success"
        });
        setFormData({
          tasksCompleted: '',
          hoursWorked: '',
          issuesFaced: '',
          nextDayPlan: '',
          remarks: '',
        });
      } else {
        // alert('Error submitting report');
      }
    } catch (error) {
      // alert('Error submitting report');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-6">Daily Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            name="tasksCompleted"
            placeholder="Tasks Completed"
            value={formData.tasksCompleted}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full h-28"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="hoursWorked"
            placeholder="Hours Worked"
            value={formData.hoursWorked}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="issuesFaced"
            placeholder="Issues Faced"
            value={formData.issuesFaced}
            onChange={handleChange}
            className="textarea textarea-bordered w-full h-28"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="nextDayPlan"
            placeholder="Plan for Tomorrow"
            value={formData.nextDayPlan}
            onChange={handleChange}
            className="textarea textarea-bordered w-full h-28"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="remarks"
            placeholder="Remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="textarea textarea-bordered w-full h-28"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DailyUpdates;
