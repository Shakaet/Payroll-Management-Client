import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Context } from '../provider/AuthProvider';
import useAxios from '../hook/useAxios';
import Swal from 'sweetalert2';


const LeaveRequest = () => {
  let axiosInstance= useAxios()

  let {user}= useContext(Context)
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    reason: '',
    date: '',
    email:user?.email,
    status:"pending"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)

    try {
      const response = await axiosInstance.post('/api/leave-request', formData);

      toast.success('Leave request sent to admin!');
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Sent successfully',
      });

      setIsOpen(false);
      setFormData({ reason: '', date: '' });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Failed to send leave request';
      toast.error(errorMessage);
      // console.log(errorMessage)
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });

    }
  };

  return (
    <div className={`p-4`}>
      <button
        className={`btn btn-primary ${isOpen && "hidden"}`}
        onClick={() => setIsOpen(true)}
      >
        Request For Leave
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Leave Request</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Reason for Leave</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Leave Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveRequest;
