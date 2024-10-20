"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { serverBaseUrl } from "@/app/lib/baseUrl";

export default function TopHotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  // Memoize the fetchTopHotels function with useCallback
  const fetchTopHotels = useCallback(async () => {
    try {
      const res = await fetch(`${serverBaseUrl}/hotel/top-rated`);
      const hotelsRes = await res.json();
      setHotels(hotelsRes?.data || []); // Set the hotel data
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  // useEffect to call the fetch function
  useEffect(() => {
    fetchTopHotels();
  }, [fetchTopHotels]);

  // Loading skeleton for hotel cards
  const renderSkeleton = () => {
    return Array(6)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse"
        >
          <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-lg"></div>
          <div className="mt-4 h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="mt-4 h-10 bg-blue-300 dark:bg-gray-600 rounded"></div>
        </div>
      ));
  };

  return (
    <div className="container mx-auto my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Top Rated Hotels
        </h2>

        {loading && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderSkeleton()}
          </div>
        )}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {!loading && !error && hotels.length === 0 && (
          <p className="mt-4 text-gray-500">No hotels found.</p>
        )}

        {/* Hotels Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading &&
            !error &&
            hotels.map((hotel: any) => (
              <motion.div
                key={hotel?._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={hotel?.images?.[0] || "/default-hotel.jpg"}
                  alt={hotel?.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                      {hotel.name}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {hotel?.description}
                    </p>
                    <p className="mt-2 font-semibold text-gray-800 dark:text-gray-300">
                      ${hotel?.rooms[0]?.price}/night
                    </p>
                  </div>
                  <Link href={`/hotels/${hotel?._id}`}>
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200">
                      See Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
