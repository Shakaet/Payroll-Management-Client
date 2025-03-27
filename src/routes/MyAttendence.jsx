import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Context } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyAttendance = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const { user } = useContext(Context);
    const employeeEmail = user?.email;

    const fetchAttendance = async () => {
        const { data } = await axios.get(`http://localhost:3000/attendance/${employeeEmail}`);
        return data;
    };

    const { data: attendance, isLoading, refetch } = useQuery({
        queryKey: [employeeEmail, "attendance"],
        queryFn: fetchAttendance,
        enabled: !!employeeEmail, // Prevent fetching if email is not available
    });

    const handleMarkPresent = async () => {
        try {
            await axios.put(`http://localhost:3000/attendance/${employeeEmail}`, { status: "Present" });
            refetch();
            setIsDisabled(true);
            Swal.fire("Success", "You have marked yourself as Present!", "success");
        } catch (error) {
            Swal.fire("Error", "Failed to update attendance", "error");
        }
    };

    return (
        <div className="overflow-x-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Attendance Status</h2>
      
        {isLoading ? (
          <p className="text-center text-gray-600">Loading attendance...</p>
        ) : (
          <div className="overflow-x-auto">
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
                <tr className="hover">
                  <td className="border p-3">{attendance?.employeeEmail || "N/A"}</td>
                  <td className="border p-3">{attendance?.date || "N/A"}</td>
                  <td className={`border p-3 font-bold ${attendance?.status === "Present" ? "text-black" : "text-white"}`}>
                    {attendance?.status || "Absent"}
                  </td>
                  <td className="border p-3 text-center">
                    <button
                      onClick={handleMarkPresent}
                      disabled={isDisabled || attendance?.status === "Present"}
                      className={`btn btn-sm text-white font-bold px-4 py-2 rounded-lg transition duration-300 ${
                        isDisabled || attendance?.status === "Present"
                          ? "bg-white-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      Mark Present
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      
    );
};

export default MyAttendance;
