import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import Loading from '../component/loading';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:3000/allemployee");
    return data;
  };

const ManageEmployee = () => {


    const { data:employess, isLoading,refetch } = useQuery({
        queryKey: ["employees"], // Unique key for caching
        queryFn: fetchPosts, // Function to fetch data
      });
      console.log(employess)

      if(isLoading){
        return <Loading></Loading>
      }

     

const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`http://localhost:3000/allemployee/${id}`)
        .then((response) => {
          refetch()
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
          console.log(response.data); // Handle UI update if needed
        })
        .catch((error) => {
          Swal.fire("Error!", "Something went wrong.", "error");
          console.error("Error deleting:", error);
        });
    }
  });
};

    
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Employees Listings</h2>
      <div className="overflow-x-auto">
        <table className="table w-full rounded-4xl">
          <thead>
            <tr className="bg-gray-200">
              <th>Photo</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Type</th>
              <th>Salary ($)</th>
              <th>Shift</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='bg-gray-400'>
            {employess.map((job, index) => (
              <tr key={index} className="hover">
                <td>
                  <img src={job.user_photo} alt={job.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="font-semibold">{job.name}</td>
                <td>{job.job_title}</td>
                <td>
                  <span className="badge badge-primary">{job.job_type}</span>
                </td>
                <td className="font-semibold">${job.salary}</td>
                <td>{job.work_Shift}</td>
                <td>
                  <Link to={`/dashboard/updateemployee/${job._id}`} className="btn btn-sm btn-info mr-2">
                    Update
                  </Link>
                  <button onClick={()=>handleDelete(job._id)} className="btn btn-sm btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageEmployee