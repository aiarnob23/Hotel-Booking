"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Switzerland Hotels";
  }, []);

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Header Section */}
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center"
        variants={fadeIn(0)}
        whileHover={{ scale: 1.05 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-2xl mx-auto dark:text-gray-300"
        variants={fadeIn(0.2)}
      >
        Welcome to our Switzerland Hotel Booking platform, your trusted partner
        in finding the perfect Swiss retreat. Whether you&apos;re seeking luxury,
        adventure, or family escapes, we offer handpicked hotels across the
        breathtaking landscapes of Switzerland.
      </motion.p>

      {/* Mission Section */}
      <motion.section
        className="my-12"
        variants={fadeIn(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our mission is to connect travelers with the most exquisite and
          welcoming accommodations in Switzerland. We strive to create memorable
          experiences by offering a diverse range of hotels that cater to every
          need, whether it&apos;s a luxury alpine resort or a cozy countryside
          retreat.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="my-12"
        variants={fadeIn(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
          Our Vision
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We envision a world where every traveler can easily explore the beauty
          of Switzerland, from its pristine lakes to towering mountains, through
          a seamless and personalized hotel booking experience. Our platform
          empowers travelers to discover the best that Switzerland has to offer,
          all while ensuring comfort and quality in every stay.
        </p>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="my-12"
        variants={fadeIn(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">
              Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We partner with top-rated hotels to ensure that each stay exceeds
              our guests expectations, providing an exceptional experience from
              check-in to check-out.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">
              Sustainability
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We promote eco-friendly practices and partner with hotels
              committed to reducing their environmental footprint, helping
              preserve the natural beauty of Switzerland for future generations.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2 dark:text-white">
              Customer-Centric
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our platform is designed with our guests in mind, offering easy
              navigation, tailored recommendations, and responsive customer
              support to ensure a smooth booking experience.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Scrollable Hotel Services Section */}
      <motion.section
        className="my-12"
        variants={fadeIn(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
          Our Services
        </h2>
        <div className="overflow-x-scroll no-scrollbar flex space-x-6 py-4">
          <motion.div
            className="min-w-[250px] p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold dark:text-white">
              Luxury Stays
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experience world-class luxury at top resorts and hotels across
              Switzerland, from the lakes of Geneva to the snow-capped Alps.
            </p>
          </motion.div>
          <motion.div
            className="min-w-[250px] p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold dark:text-white">
              Family Retreats
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy family-friendly hotels with spacious accommodations and
              kid-friendly amenities in scenic Swiss locations.
            </p>
          </motion.div>
          <motion.div
            className="min-w-[250px] p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold dark:text-white">
              Adventure Escapes
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay close to the action with hotels offering direct access to
              skiing, hiking, and other outdoor adventures.
            </p>
          </motion.div>
      
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
