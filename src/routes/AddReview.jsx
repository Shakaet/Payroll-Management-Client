import React, { useState } from 'react'

const AddReview = () => {


  // const [title, setTitle] = useState('');
  //   const [rating, setRating] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [recommend, setRecommend] = useState('');



    let [data,setData]=useState({
            title:"",
            rating:"",
            description:"",
            recommend:"",

    })

    const handleSubmit = (e) => {
        e.preventDefault();

        // const reviewData = {
        //     title,
        //     rating,
        //     description,
        //     recommend,
        // };

        // console.log('Review submitted:', reviewData);

        // // Reset form
        // setTitle('');
        // setRating('');
        // setDescription('');
        // setRecommend('');


      }


      let handlechange=(e)=>{
        e.preventDefault()

        let name=e.target.name
        let value=e.target.value

         setData({
            ...data,
            [name]:value
        })






      }

      console.log(data)



  return (
    <div>



      <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Employee Review</h2>

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

                    {/* Rating */}
                    <div>
                        <label className="label">
                            <span className="text-gray-700 font-medium">Rating (1–5)</span>
                        </label>
                        <select
                            value={data.rating}
                            name='rating'
                            onChange={handlechange}
                            required
                            className="select select-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
                        >
                            <option value="">Select rating</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
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
                            name='description'
                            onChange={handlechange}
                            required
                            className="textarea textarea-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
                        ></textarea>
                    </div>

                    {/* Recommend */}
                    <div>
                        <label className="label">
                            <span className="text-gray-700 font-medium">Would you recommend us?</span>
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="recommend"
                                    value="Yes"
                                    checked={data.recommend === 'Yes'}
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
                                    checked={data.recommend === 'No'}
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
  )
}

export default AddReview