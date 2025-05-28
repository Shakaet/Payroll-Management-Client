import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../provider/AuthProvider";
import Swal from 'sweetalert2';


const AddReview = () => {

    let {user}= useContext(Context)
 

  let [data, setData] = useState({
    title: "",
    rating: "",
    description: "",
    recommend: "",
    email:user?.email,
    name:user?.displayName,
    photo:user?.photoURL
  });



let handlechange = (e) => {
    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    //  console.log(data);
      try {
    const response = await axios.post('https://payroll-management-system-server.vercel.app/api/reviews', data); // Change URL as needed
   Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your review has been submitted.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });


   
    setData({
      title: '',
      rating: '',
      description: '',
      recommend: '',
    });

    
  } catch (error) {
    console.error('Error submitting review:', error);
   
  }


    
    
  };

  

 
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6">
            Employee Review
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Review Title */}
            <div>
              <label className="label">
                <span className="text-gray-700 font-medium">Review Title</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Great Environment"
                value={data.title}
                name={"title"}
                onChange={handlechange}
                required
                className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
            </div>

            
            {/* Star Rating */}
            <div>
              <label className="label">
                <span className="text-gray-700 font-medium">Rating</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="cursor-pointer text-2xl">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={parseInt(data.rating) === star}
                      onChange={handlechange}
                      className="hidden"
                      required
                    />
                    <span
                      className={
                        parseInt(data.rating) >= star
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }
                    >
                      ★
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="text-gray-700 font-medium">Your Feedback</span>
              </label>
              <textarea
                rows="3"
                placeholder="Share your experience..."
                value={data.description}
                name="description"
                onChange={handlechange}
                required
                className="textarea textarea-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            {/* Recommend */}
            <div>
              <label className="label">
                <span className="text-gray-700 font-medium">
                  Would you recommend us?
                </span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="recommend"
                    value="Yes"
                    checked={data.recommend === "Yes"}
                    onChange={handlechange}
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="recommend"
                    value="No"
                    checked={data.recommend === "No"}
                    onChange={handlechange}
                  />
                  No
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
