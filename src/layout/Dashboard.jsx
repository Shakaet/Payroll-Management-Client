import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useEmployee from '../hook/useEmployee';
import Loading from '../component/loading';
import { FaChartLine, FaHome, FaUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { MdAttribution } from "react-icons/md";
import { MdTaskAlt } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";



const Dashboard = () => {


  
  

 


  const {  signOuts } = useContext(Context);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  let nav= useNavigate()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogout = () => {
    signOuts();

    nav("/login")
    
  };

  let [isAdmin,adminLoading]= useAdmin()
  let [isemployee,employeeLoading]=useEmployee()
  console.log(isAdmin)

  if(adminLoading){
    return <Loading></Loading>
  }

  
 

 

 


  
  return (
    <div>

<div className="flex min-h-screen bg-gray-100 josefin-sans-font">
      
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative w-64 bg-[#2D3748] text-white p-5 space-y-4 flex flex-col transition-transform duration-300 ease-in-out z-50`}
      >
        {
          isAdmin ?(
            <h2 className="text-3xl font-semibold text-center text-yellow-400">Admin Panel</h2>
          ) : (
            <h2 className="text-3xl font-semibold text-center text-yellow-400">User Panel</h2>
          )
        }
        <hr />
        
        
        <nav className="flex flex-col space-y-3 text-lg">
          
        

          <Link to="/dashboard" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
            <FaHome className="text-yellow-400" />
            <span>Dashboard Home</span>
          </Link>
       
         

          {isAdmin &&   <>
              
              <Link to="/dashboard/addnewemployee" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <IoIosPersonAdd  className="text-blue-400" />
                <span>Add new Employee</span>
              </Link>
              
              <Link to="/dashboard/managenewemployee" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <MdManageAccounts className="text-blue-400" />
                <span>Manage Employee</span>
              </Link>
              <Link to="/dashboard/attendenceform" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
              <MdBookmarkAdded className="text-blue-400" />
                <span>Add Attendence Form</span>
              </Link>
 

              <Link to="/dashboard/allattendence" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
              <MdAttribution className="text-blue-400" />
                <span>Employee's Attendence</span>
              </Link>
              <Link to="/dashboard/addTask" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
              <MdAddTask className="text-blue-400" />
                <span>Add Task</span>
              </Link>
              <Link to="/dashboard/managetask" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <SiManageiq  className="text-blue-400" />
                <span>Manage Task</span>
              </Link>
              <Link to="/dashboard/leaveaplication" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <FaChartLine className="text-blue-400" />
                <span>Leaving Application</span>
              </Link>
              <Link to="/dashboard/paymentHistory" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <RiSecurePaymentLine className="text-blue-400" />
                <span>Payment History</span>
              </Link>
             
              
              
              
            </>}

            {isemployee &&  <>
                <Link to="/dashboard/myattendence" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <MdAttribution className="text-blue-400" />
                <span>My Attendence</span>
              </Link>
              <Link to="/dashboard/myTask" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <MdTaskAlt className="text-blue-400" />
                <span>My Task</span>
              </Link>

              <Link to="/dashboard/dailyupdates" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <MdOutlineBrowserUpdated className="text-blue-400" />
                <span>Daily Updates</span>
              </Link>

              <Link to="/dashboard/livingreq" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <FaChartLine className="text-blue-400" />
                <span> Leave Request</span>
              </Link>
              <Link to="/dashboard/myPaymentHistory" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <MdTaskAlt className="text-blue-400" />
                <span>My Payment History</span>
              </Link>
               <Link to="/dashboard/adreview" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                <RiSecurePaymentLine className="text-blue-400" />
                <span>Add Review</span>
              </Link>
              
              
              

            </>}

          {/* Common Links */}
          <Link to="/dashboard/myprofile" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
            <FaUser className="text-purple-400" />
            <span>My Profile</span>
          </Link>
          <Link to="/" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
            <IoHomeSharp className="text-purple-400" />
            <span>Home</span>
          </Link>
          <button onClick={handleLogout} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
            <IoLogOut className="text-purple-400" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
      

      {/* Main Content */}
      <div className={`flex-1 p-5  bg-[#275a7d]   `}>
        {/* Mobile Menu Button */}
        <button onClick={toggleSidebar} className="md:hidden mb-4 p-2 bg-gray-900 text-white rounded-md">
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>
        

        <h1 className={`text-4xl font-bold  font-stretch-extra-condensed  text-center  text-black  md:text-5xl lg:text-6xl bg-[#EDF2F7]  bg-clip-text drop-shadow-lg`}>
           DASHBOARD
          </h1>
          
          

        <div className="mt-4  w-full p-5 rounded-lg">
          <Outlet />
        </div>
        
      </div>
      
    </div>
    </div>
  )
}

export default Dashboard