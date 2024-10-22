"use client";
import { useSearchParams } from "next/navigation";
import SearchField from "../components/SearchField";
import { Suspense, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
  FaChild,
  FaBed,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { differenceInDays } from "date-fns";
import { serverBaseUrl } from "@/app/lib/baseUrl";
import HotelSkeleton from "../components/skeletons/HotelsSkeleton";

export default function Hotels() {
  return (
    <Suspense fallback={<div>Loading search parameters...</div>}>
      <HotelsContent />
    </Suspense>
  );
}

function HotelsContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const checkInDate = searchParams.get("check-in");
  const checkOutDate = searchParams.get("check-out");
  const rooms = searchParams.get("rooms");
  const adults = searchParams.get("adults");
  const children = searchParams.get("children");

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [stayNights, setStayNights] = useState<number>(1); // Default to 1 night if no valid dates

  // Calculate the difference between check-in and check-out
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const inDate = new Date(checkInDate);
      const outDate = new Date(checkOutDate);
      const nights = differenceInDays(outDate, inDate);

      // Ensure a minimum of 1 night stay
      setStayNights(nights > 0 ? nights : 1);
    }
  }, [checkInDate, checkOutDate]);

  const fetchHotels = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${serverBaseUrl}/hotel/find-hotels?searchTerm=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }

      const data = await response.json();
      setHotels(data?.data);
    } catch (err) {
      setError("Failed to load hotels");
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);




  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <SearchField />

      {/* Searched For Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Search Details
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="mr-2 text-blue-500">
              <FaMapMarkerAlt />
            </span>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {searchTerm || "Any location"}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-green-500">
              <FaCalendarAlt />
            </span>
            <p>
              <span className="font-semibold">Check-in:</span>{" "}
              {checkInDate || "N/A"}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-red-500">
              <FaCalendarAlt />
            </span>
            <p>
              <span className="font-semibold">Check-out:</span>{" "}
              {checkOutDate || "N/A"}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-purple-500">
              <FaBed />
            </span>
            <p>
              <span className="font-semibold">Rooms:</span> {rooms || "N/A"}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-yellow-500">
              <FaUserFriends />
            </span>
            <p>
              <span className="font-semibold">Adults:</span> {adults || "N/A"}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-pink-500">
              <FaChild />
            </span>
            <p>
              <span className="font-semibold">Children:</span>{" "}
              {children || "N/A"}
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-indigo-500">
              <FaCalendarAlt />
            </span>
            <p>
              <span className="font-semibold">Total Nights:</span> {stayNights}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Hotel Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Available Hotels
        </h2>

        {loading && <div className="mt-4"><HotelSkeleton/></div>}
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
                key={hotel?._id as any}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={hotel?.images[0] || "/default-hotel.jpg"}
                  alt={hotel?.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
                    {hotel.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {hotel?.description}
                  </p>
                  <Link
                    href={`/hotels/${hotel?._id}?rooms=${rooms}&adults=${adults}&children=${children}&nights=${stayNights}&checkIn=${checkInDate}&checkOut=${checkOutDate}`}
                  >
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