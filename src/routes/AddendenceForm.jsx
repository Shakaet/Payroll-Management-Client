import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAxios from "../hook/useAxios";

const AttendenceForm = () => {
    const [email, setEmail] = useState("");
    let axiosInstance= useAxios()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post("/attendance", { employeeEmail: email });
            Swal.fire("Success", "Attendance added successfully", "success");
        } catch (error) {
            Swal.fire("Error", error.response.data.message || "Failed to add attendance", "error");
        }
    };

    return (

        
            <div className="flex items-center justify-center min-h-screen  p-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Mark Attendance</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-gray-700 font-medium">Employee Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter employee email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
                            />
                        </div>
    
                        <button 
                            type="submit"
                            className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-2 rounded-lg transition duration-300"
                        >
                            Mark Absent
                        </button>
                    </form>
                </div>
            </div>

    );
};

export default AttendenceForm;
