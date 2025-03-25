import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';

const Dashboard = () => {


  
  let isAdmin=true

 


  const {  signOuts } = useContext(Context);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let nav= useNavigate()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogout = () => {
    signOuts();

    nav("/login")
    
  };

  
 

 

 


  
  return (
    <div>

<div className="flex min-h-screen bg-gray-100 josefin-sans-font">
      
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative w-64 bg-gray-900 text-white p-5 space-y-4 flex flex-col transition-transform duration-300 ease-in-out z-50`}
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
            {/* <FaHome className="text-yellow-400" /> */}
            <span>Dashboard Home</span>
          </Link>
       
          {/* Conditional Links for Admin and User */}
          {isAdmin ? (
            <>
              
              <Link to="/dashboard/addnewemployee" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
                {/* <FaChartLine className="text-blue-400" /> */}
                <span>Add new Employee</span>
              </Link>
              
            </>
          ) : (
            <>
              
              

            </>
          )}

          {/* Common Links */}
          <Link to="/dashboard/myprofile" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
            {/* <FaUser className="text-purple-400" /> */}
            <span>My Profile</span>
          </Link>
          <Link to="/" onClick={closeSidebar} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
            {/* <AiFillHome className="text-purple-400" /> */}
            <span>Home</span>
          </Link>
          <button onClick={handleLogout} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-700 transition">
            {/* <RiLogoutBoxFill className="text-purple-400" /> */}
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
        

        <h1 className={`text-4xl font-bold  font-stretch-extra-condensed  text-center  text-black  md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-purple-600  bg-clip-text drop-shadow-lg`}>
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