"use client";
import { motion } from "framer-motion";
export default function BannerHeaders() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Remember your vacation in Switzerland.
        </h1>
      </motion.div>

      <h2 className="text-xl md:text-2xl font-semibold drop-shadow-lg">
        Find best hotels in Switzerland with us.
      </h2>
      <motion.div
        initial={{ opacity: 0.1, scale: 0.6 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <h2 className="text-xl mt-3 md:text-2xl font-semibold drop-shadow-lg">
          Save up to <span className="text-3xl font-bold">20%</span> on your
          next hotel stay!
        </h2>
      </motion.div>
    </div>
  );
}
