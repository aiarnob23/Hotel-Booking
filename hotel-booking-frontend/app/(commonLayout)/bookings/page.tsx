"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getBookings } from "../components/utils/getBookings";
import {
  FaHotel,
  FaUserFriends,
  FaChild,
  FaBed,
  FaDollarSign,
} from "react-icons/fa";

export default function Bookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getBookings();
      if (!response) throw new Error("Failed to fetch bookings");
      setBookings(response || []);
    } catch (err) {
      setError("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container min-h-screen mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
        Your Bookings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((booking) => (
          <motion.div
            key={booking._id}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <div className="text-blue-600 dark:text-blue-400 mr-2 text-2xl">
                <FaHotel />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {booking.name}
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              {new Date(booking.checkIn).toLocaleDateString()} -{" "}
              {new Date(booking.checkOut).toLocaleDateString()}
            </p>

            <div className="mt-4">
              <div className="flex items-center mb-2">
                <div className="text-gray-600 dark:text-gray-400 mr-2">
                  <FaBed />
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Room Type:</strong> {booking.selectedRoomType.type}
                </span>
              </div>

              <div className="flex items-center mb-2">
                <div className="text-green-600 dark:text-green-400 mr-2">
                  <FaDollarSign />
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Price:</strong> ${booking.selectedRoomType.price} /
                  night
                </span>
              </div>

              <div className="flex items-center mb-2">
                <div className="text-gray-600 dark:text-gray-400 mr-2">
                  <FaUserFriends />
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Rooms:</strong> {booking.rooms}
                </span>
              </div>

              <div className="flex items-center mb-2">
                <div className="text-blue-600 dark:text-blue-400 mr-2">
                  <FaUserFriends />
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Adults:</strong> {booking.adults}
                </span>
                <div className="text-yellow-600 dark:text-yellow-400 mx-2">
                  <FaChild />
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  <strong>Children:</strong> {booking.children}
                </span>
              </div>
            </div>

            <p className="mt-4 text-lg font-bold text-gray-900 dark:text-gray-100">
              Total Amount: ${booking.total}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
