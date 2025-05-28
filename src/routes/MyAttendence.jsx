import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Context } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../component/loading";

const MyAttendance = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const { user } = useContext(Context);
    const employeeEmail = user?.email;

    console.log(user)

    const fetchAttendance = async () => {
        const {data}  = await axios.get(`https://payroll-management-system-server.vercel.app/attendance/${employeeEmail}`);
        return data;
    };

    const { data: attendance, isLoading, refetch } = useQuery({
        queryKey: [employeeEmail, "attendance"],
        queryFn: fetchAttendance,
        enabled: !!employeeEmail, // Prevent fetching if email is not available
    });
    console.log(attendance)
  

    const handleMarkPresent = async () => {
        try {
            await axios.put(`https://payroll-management-system-server.vercel.app/attendance/${employeeEmail}`, { status: "Present" });
            refetch();
            setIsDisabled(true);
            Swal.fire("Success", "You have marked yourself as Present!", "success");
        } catch (error) {
            Swal.fire("Error", "Failed to update attendance", "error");
        }
    };


    if(attendance?.length===0){
      return <div className="flex items-center justify-center h-screen">
      <p className="text-4xl md:text-6xl font-extrabold text-center text-pink-600 shadow-lg px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-md">
        No Attendance Today for You!
      </p>
    </div>
    
    }

    return (
      <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-400">Attendance Status</h2>
    
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : attendance?.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-4xl text-red-600 font-extrabold text-center">
            No Attendance Today for You!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl">
          <table className="table w-full rounded-4xl">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3">Employee Email</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Status</th>
                <th className="border p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-gray-400">
              {attendance.map((item, index) => (
                <tr key={index} className="hover">
                  <td className="border p-3">{item.employeeEmail || "N/A"}</td>
                  <td className="border p-3">{item.date || "N/A"}</td>
                  <td
                    className={`border p-3 font-bold ${
                      item.status === "Present" ? "text-black" : "text-white"
                    }`}
                  >
                    {item.status || "Absent"}
                  </td>
                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handleMarkPresent(item._id)}
                      disabled={isDisabled || item.status === "Present"}
                      className={`btn btn-sm text-white font-bold px-4 py-2 rounded-lg transition duration-300 ${
                        isDisabled || item.status === "Present"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      Mark Present
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    
      
    );
};

export default MyAttendance;
