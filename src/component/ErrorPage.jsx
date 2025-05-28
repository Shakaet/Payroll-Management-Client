import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 text-white px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-xl"
      >
        <motion.h1
          className="text-8xl font-extrabold drop-shadow-md"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-3xl font-bold mt-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Oops! Page Not Found
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-white/80"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          The page you're looking for might have been removed or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
