import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';
import AnimatedNavbar from './AnimatedNavbar';

const Navbar = () => {


  const { user, signOuts } = useContext(Context); 
  let nav=useNavigate()
  const handleLogout = () => {
    signOuts();

    nav("/login")
    
  };


  
  

  return (
  //   <div className="navbar bg-[#1A202C] text-white shadow-lg fixed top-0 z-50">
  //   {/* Navbar Start */}
  //   <div className="navbar-start">
  //     <div className="dropdown">
  //       <div
  //         tabIndex={0}
  //         role="button"
  //         className="btn btn-ghost lg:hidden text-white font-extrabold"
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-6 w-6"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M4 6h16M4 12h8m-8 6h16"
  //           />
  //         </svg>
  //       </div>
  //       <ul
  //         tabIndex={0}
  //         className="menu menu-sm dropdown-content bg-blue-800 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
  //       >
  //         <li>
  //           <Link to="/" className="text-white hover:text-gray-300">Home</Link>
  //         </li>
  
  //         <>
  //         <li>
  //             <Link to="/contactus" className="text-white hover:text-gray-300 font-bold">Contact Us</Link>
  //           </li>
  //           <li>
  //             <Link to="/aboutus" className="text-white hover:text-gray-300 transition-colors duration-200 font-bold">About Us</Link>
  //           </li>
  //           <li>
  //             <Link to="/reviews" className="text-white hover:text-gray-300 transition-colors duration-200 font-bold">All Reviews</Link>
  //           </li>
            
  //           <li>
  //             <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
  //           </li>
            
            
  //         </>
  //       </ul>
  //     </div>
  //     <Link to="/" className="btn btn-ghost text-2xl text-white font-bold">
  //       Payroll
  //     </Link>
  //   </div>
  
  //   {/* Navbar Center */}
  //   <div className="navbar-center hidden lg:flex">
  //     <ul className="menu menu-horizontal px-1 space-x-6 text-xl">
  //       <li>
  //         <Link to="/" className="text-white font-semibold hover:text-gray-300 transition-colors duration-200">Home</Link>
  //       </li>
        
  
  //       <>
  //       <li>
  //             <Link to="/contactus" className="text-white hover:text-gray-300 transition-colors duration-200 font-bold">Contact Us</Link>
  //           </li>
  //           <li>
  //             <Link to="/aboutus" className="text-white hover:text-gray-300 transition-colors duration-200 font-bold">About Us</Link>
  //           </li>
  //           <li>
  //             <Link to="/reviews" className="text-white hover:text-gray-300 transition-colors duration-200 font-bold">All Reviews</Link>
  //           </li>
         
  //         <li>
  //           <Link to="/dashboard" className="text-white font-semibold hover:text-gray-300 transition-colors duration-200">Dashboard</Link>
  //         </li>

          
          
      
  //       </>
  //     </ul>
  //   </div>
  
  //   {/* Navbar End */}
  //   <div className="navbar-end">
      
  //     {user ? (
  //       <div className="dropdown dropdown-end">
  //         <div tabIndex={0} role="button" className="flex items-center gap-2 text-white">
  //           <img
  //             title={user?.displayName}
  //             src={user?.photoURL}
  //             alt="User Avatar"
  //             className="h-10 w-10 rounded-full"
  //           />
  //         </div>
  //         <ul
  //           tabIndex={0}
  //           className="menu menu-sm dropdown-content bg-blue-800 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
  //         >
  //           <li>
  //             <button
  //               onClick={handleLogout}
  //               className="text-white text-lg hover:bg-gray-500 p-2 rounded-md w-full text-left"
  //             >
  //               Logout
  //             </button>
  //           </li>
  //         </ul>
  //       </div>
  //     ) : (
  //       <Link to="/login" className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold">
  //         Login
  //       </Link>
  //     )}
  //   </div>
  // </div>
  
   <AnimatedNavbar user={user} handleLogout={handleLogout} />
  )
}

export default Navbar