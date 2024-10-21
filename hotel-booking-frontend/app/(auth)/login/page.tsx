"use client";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function SignInBtn() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Switz Hotels
        </h1>
        <p className="text-lg text-gray-600">
          Discover luxurious hotels nestled in the Swiss Alps. Please sign in to
          access your bookings and special offers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://hotel-booking-frontend-teal.vercel.app/",
            })
          }
          color="primary"
          size="lg"
          className="rounded-full px-10 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <span className="font-semibold">Click here to Sign In</span>
        </Button>
      </motion.div>
    </div>
  );
}
