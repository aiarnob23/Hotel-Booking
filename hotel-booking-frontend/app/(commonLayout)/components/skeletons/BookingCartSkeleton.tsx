"use client";
import { motion } from "framer-motion";

const BookingSkeleton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white min-h-screen dark:bg-gray-800 shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl animate-pulse"
    >
      <div className="flex items-center mb-4">
        <div className="bg-gray-300 dark:bg-gray-700 w-12 h-12 rounded-full"></div>
        <div className="ml-4 flex flex-col space-y-2">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 w-32 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-40 rounded"></div>
        </div>
      </div>

      <div className="h-4 bg-gray-300 dark:bg-gray-700 w-48 rounded mb-4"></div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-300 dark:bg-gray-700 w-6 h-6 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-32 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-300 dark:bg-gray-700 w-6 h-6 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-32 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-300 dark:bg-gray-700 w-6 h-6 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-32 rounded"></div>
        </div>
      </div>

      <div className="h-6 bg-gray-300 dark:bg-gray-700 w-24 rounded mt-4"></div>
    </motion.div>
  );
};

export default BookingSkeleton;
