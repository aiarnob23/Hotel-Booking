"use client";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { serverBaseUrl } from "@/app/lib/baseUrl";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useUser } from "@/app/providers";
import Swal from "sweetalert2";
import { createBooking } from "../../components/utils/createBooking";
import HotelDetailsSkeleton from "../../components/skeletons/HotelDetailsSkeleton";

export default function HotelDetails() {
  const params = useParams();
  const hotelId = params.id;

  return (
    <Suspense fallback={<div>Loading hotel details...</div>}>
      <HotelDetailsContent hotelId={hotelId} />
    </Suspense>
  );
}

function HotelDetailsContent({ hotelId }:{hotelId:any}) {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const [rooms, setRooms] = useState(Number(searchParams.get("rooms")) || 1);
  const [adults, setAdults] = useState(Number(searchParams.get("adults")) || 1);
  const [children, setChildren] = useState(
    Number(searchParams.get("children")) || 0
  );
  const stayNights = Number(searchParams.get("nights")) || 1;
  const [checkIn, setCheckIn] = useState<any>(searchParams.get("checkIn"));
  const [checkOut, setCheckOut] = useState<any>(searchParams.get("checkOut"));

  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<any>(null);
  const [passport, setPassport] = useState<any>(null);
  const [Nid, setNid] = useState<any>(null);
  const [presentAddress, setPresentAddress] = useState<string>("");
  const { name } = hotel ? hotel : "";
  const { email } = user ? user : "";

  // Fetch the hotel data based on the hotelId
  const fetchHotel = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${serverBaseUrl}/hotel/hotel-details/${hotelId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch hotel details");
      }
      const data = await response.json();
      setHotel(data?.data);
    } catch (err) {
      setError("Failed to load hotel details");
    } finally {
      setLoading(false);
    }
  }, [hotelId]);

  useEffect(() => {
    if (hotelId) {
      fetchHotel();
    }
  }, [fetchHotel, hotelId]);

  // Calculate the total price based on the selected room type and parameters from the search
  const calculateTotalPrice = () => {
    if (!selectedRoomType) return 0;

    let total = selectedRoomType.price * stayNights * rooms;

    // Extra charge for adults and children
    if (adults > 2) {
      total += (adults - 2) * 30 * stayNights; // Extra charge for adults
    }
    if (children > 1) {
      total += (children - 1) * 5 * stayNights; // Extra charge for children
    }
    return total;
  };

  if (loading) {
    return (
      <div>
        <HotelDetailsSkeleton />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Booking confirmation handle
  const handleBookingConfirmation = (e: any) => {
    e.preventDefault();
    const total = calculateTotalPrice();
    const payload = {
      email,
      name,
      checkIn,
      checkOut,
      selectedRoomType,
      rooms,
      adults,
      children,
      total,
    };
    console.log(payload);
    if (user) {
      Swal.fire({
        title: "Do you confirm this booking?",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        denyButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          createBooking(payload);
          Swal.fire("Booked!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Cancelled");
        }
      });
    } else {
      signIn("google", { callbackUrl: window.location.href });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {/* Hotel Details Section */}
      <div className="col-span-2">
        {hotel ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-gray-800 dark:text-gray-100"
                >
                  {hotel.name}
                </motion.h1>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <FaMapMarkerAlt />
                  <span className="mx-1" />
                  {hotel.location}
                </motion.div>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-center mt-2"
                >
                  {Array.from({ length: Math.round(hotel.rating) }).map(
                    (_, i) => (
                      <div className="text-yellow-500 mr-2">
                        <FaStar key={i} />
                      </div>
                    )
                  )}
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {hotel.rating}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {hotel.images.map((image: string, index: number) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Hotel image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                About the Hotel
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {hotel.description}
              </p>
            </motion.div>

            {/* Rooms & Pricing */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Rooms & Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hotel.rooms.map((room: any, index: number) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:border-gray-700 dark:bg-gray-800"
                  >
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                      {room.type}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Quantity: {room.quantity}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Price: ${room.price} per night
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Facilities */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Facilities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.facilities.map((facility: any, index: number) => (
                  <li
                    key={index}
                    className="flex items-center dark:text-gray-300"
                  >
                    <div className="text-green-500 mr-2">
                      <AiOutlineCheck />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">
                        {facility.name}
                      </p>
                      {facility.description && (
                        <p className="text-gray-600 dark:text-gray-400">
                          {facility.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Area Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Area Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    Nearby Attractions
                  </h3>
                  <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
                    {hotel.areaInfo.nearby.map(
                      (place: string, index: number) => (
                        <li key={index}>{place}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    Restaurants & Cafes
                  </h3>
                  <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
                    {hotel.areaInfo.restaurantsAndCafes.map(
                      (restaurant: string, index: number) => (
                        <li key={index}>{restaurant}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* House Rules */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                House Rules
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Check-in:</strong> {hotel.houseRules.checkIn}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Check-out:</strong> {hotel.houseRules.checkOut}
              </p>
              <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
                {hotel.houseRules.additionalRules.map(
                  (rule: string, index: number) => (
                    <li key={index}>{rule}</li>
                  )
                )}
              </ul>
            </motion.div>

      
          </>
        ) : (
          <p>No details available for this hotel.</p>
        )}
      </div>

      {/* Checkout Booking Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Booking Details
        </h2>

        <form onSubmit={handleBookingConfirmation} action="">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Select Room Type
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
              value={selectedRoomType?.type || ""}
              required
              onChange={(e) =>
                setSelectedRoomType(
                  hotel.rooms.find((room: any) => room.type === e.target.value)
                )
              }
            >
              <option value="">-- Select a Room --</option>
              {hotel.rooms.map((room: any, index: number) => (
                <option key={index} value={room.type}>
                  {room.type} - ${room.price} per night
                </option>
              ))}
            </select>
          </div>

          {/* Number of Rooms */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Number of Rooms
            </label>
            <input
              type="number"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            />
          </div>

          {/* Number of Adults */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Number of Adults
            </label>
            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            />
          </div>

          {/* Number of Children */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Number of Children
            </label>
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          {/* Passport No */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Passport No.
            </label>
            <input
              type="text"
              min="0"
              required
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          {/* National Id No. */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              National Id No.
            </label>
            <input
              type="text"
              min="0"
              required
              value={Nid}
              onChange={(e) => setNid(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          {/* Present Address */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Present Address
            </label>
            <input
              type="text"
              min="0"
              required
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800"
            />
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Booking Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Room Type:</strong>{" "}
              {selectedRoomType ? selectedRoomType.type : "None selected"}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Check In Date:</strong>
              <span className="text-gray-500 dark:text-slate-400">
                {" "}
                {checkIn}
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Check Out Date:</strong>{" "}
              <span className="text-gray-500 dark:text-slate-400">
                {" "}
                {checkOut}
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Total Nights:</strong> {stayNights}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Rooms:</strong> {rooms}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Adults:</strong> {adults}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Children:</strong> {children}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <strong>Total Price:</strong> ${calculateTotalPrice()}
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md"
          >
            Confirm Booking
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
