import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Context } from '../provider/AuthProvider';
import { Parallax } from 'react-parallax';
import bg from "../assets/bg1.jpg"


const EmployeesReviews = () => {

  //  let {darkmode}=useContext(Context)

    const fetchUsers = async () => {
        const response = await axios.get(`https://payroll-management-system-server.vercel.app/api/review`);
        return response.data;
      };

   
    const { data: reviews = [], isLoading:reviewsLoading } = useQuery({
        queryKey: ["reviews"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });


const StarRating = ({ rating }) => {


  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex text-yellow-400">
      {stars.map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'fill-current' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.286 3.959c.3.921-.755 1.688-1.54 1.118l-3.375-2.455a1 1 0 00-1.175 0l-3.375 2.455c-.784.57-1.838-.197-1.54-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.045 9.388c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.96z" />
        </svg>
      ))}
    </div>
  );
};
  return (
    <div>


      <Parallax blur={{ min: -15, max: 15 }} bgImage={bg} bgImageAlt="Hero Background" strength={300}>
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20">
            
           <section className=" py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold text-center text-indigo-400 mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Employee Reviews
    </motion.h1>

    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map(({ title, rating, description, recommend, name, photo, position }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          className="bg-gray-900 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition-transform hover:scale-105 p-6 flex flex-col text-white"
        >
          {/* Reviewer Info */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={photo}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
            />
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-yellow-400 text-sm">{position}</p>
              <StarRating rating={Number(rating)} />
            </div>
          </div>

          {/* Review Title */}
          <h2 className="text-lg font-bold text-cyan-400 mb-2">{title}</h2>

          {/* Description */}
          <p className="text-gray-300 flex-grow">{description}</p>

          {/* Recommendation */}
          <p className="mt-4 font-medium text-sm text-gray-200">
            Recommend:{" "}
            <span
              className={`${
                recommend === 'Yes' ? 'text-green-400' : 'text-red-400'
              } font-semibold`}
            >
              {recommend}
            </span>
          </p>

          {/* Optional Social or Contact (placeholder) */}
          <div className="flex justify-center gap-4 mt-6 text-yellow-300 text-xl">
            <a href="#" className="hover:text-cyan-400 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

          </div>
        </div>
      </Parallax>


    
    
    
    
    
    </div>
  )
}

export default EmployeesReviews