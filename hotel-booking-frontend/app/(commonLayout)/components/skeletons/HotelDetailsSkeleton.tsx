"use client";
import { motion } from "framer-motion";

export default function HotelDetailsSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-2"
    >
      {/* Hotel Title and Location Skeleton */}
      <div className="mb-6">
        <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>

      {/* Image Carousel Skeleton */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"
          />
        ))}
      </div>

      {/* Description Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>

      {/* Rooms & Pricing Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg shadow-lg dark:border-gray-700 dark:bg-gray-800 space-y-2"
            >
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="flex items-center space-x-2">
              <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            </li>
          ))}
        </ul>
      </div>

      {/* Area Info Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="h-5 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
            <ul className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={i}
                  className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"
                />
              ))}
            </ul>
          </div>
          <div>
            <div className="h-5 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
            <ul className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={i}
                  className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* House Rules Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <ul className="space-y-2 mt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <li
              key={i}
              className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
