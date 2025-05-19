import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { motion } from 'framer-motion';

const EmployeesReviews = () => {

    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/api/review`);
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


     <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 py-12 px-6 mt-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Employee Reviews</h1>
      
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map(({ title, rating, description, recommend, name, photo }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5, ease: 'easeOut' }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={photo}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <StarRating rating={Number(rating)} />
              </div>
            </div>

            <h2 className="text-lg font-bold text-blue-600 mb-2">{title}</h2>

            <p className="text-gray-700 flex-grow">{description}</p>

            <p className="mt-4 font-medium text-sm">
              Recommend:{" "}
              <span
                className={`${
                  recommend === 'Yes' ? 'text-green-600' : 'text-red-600'
                } font-semibold`}
              >
                {recommend}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>


    
    
    
    
    
    </div>
  )
}

export default EmployeesReviews