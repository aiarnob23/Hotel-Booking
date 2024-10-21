"use client";
import { motion } from "framer-motion";

export default function HotelSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto sm:max-w-xs lg:max-w-sm"
    >
      {/* Image Skeleton */}
      <div className="w-full h-40 bg-gray-300 dark:bg-gray-600" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-4">
        {/* Title Skeleton */}
        <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mx-auto" />

        {/* Location Skeleton */}
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mx-auto" />

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full" />
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6" />
        </div>

        {/* Price Skeleton */}
        <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mx-auto" />

        {/* Button Skeleton */}
        <div className="h-10 bg-blue-300 dark:bg-blue-700 rounded w-full mt-4" />
      </div>
    </motion.div>
  );
}
