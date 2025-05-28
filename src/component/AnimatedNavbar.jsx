import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"
import { useContext } from "react";
import { Context } from "../provider/AuthProvider";
import Toogle from "./Toogle";

const AnimatedNavbar = ({ user, handleLogout }) => {

  // bg-gradient-to-r from-[#1A202C] to-[#2D3748]
  
  return (
    <motion.div 
      className="navbar fixed top-0 z-50 bg-gray-900 text-white shadow-xl px-4 py-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white font-extrabold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-[#2D3748] rounded-box w-52"
          >
            <Fade cascade damping={0.1}>
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/contactus" className="hover:text-blue-300">Contact Us</Link></li>
              <li><Link to="/aboutus" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-blue-300">All Reviews</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link></li>
              
            </Fade>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Payroll
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
          <Fade cascade damping={0.1} direction="down">
            <li><Link to="/" className="hover:text-blue-300 transition">Home</Link></li>
            <li><Link to="/contactus" className="hover:text-blue-300 transition">Contact Us</Link></li>
            <li><Link to="/aboutus" className="hover:text-blue-300 transition">About Us</Link></li>
            <li><Link to="/reviews" className="hover:text-blue-300 transition">All Reviews</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-300 transition">Dashboard</Link></li>
            
          </Fade>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 cursor-pointer"
              data-tooltip-id="userTooltip"
              data-tooltip-content={user?.displayName}
            >
              <img
                src={user?.photoURL}
                alt="User Avatar"
                className="h-10 w-10 rounded-full border-2 border-white hover:scale-110 transition"
              />
            </div>
            <Tooltip id="userTooltip" place="bottom" />
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-[#2D3748] rounded-box w-52"
            >
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold shadow-md transition-transform hover:scale-105"
          >
            Login
          </Link>
        )}
       
      </div>
       {/* <Toogle></Toogle> */}
    </motion.div>
  );
};

export default AnimatedNavbar;
