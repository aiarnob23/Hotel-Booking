// Footer.tsx
import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 rounded-lg mt-12 dark:bg-slate-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Switzerland Hotel Bookings</h2>
            <p className="text-sm">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="hover:text-gray-400 dark:hover:text-gray-300">
              <a
                href="mailto:aiarnob23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-6 h-6">
                  <FaEnvelope />
                </span>
              </a>
            </div>
            <div className="hover:text-gray-400 dark:hover:text-gray-300">
              <a
                href="https://www.linkedin.com/in/aminul-islam-arnob-571a7a314/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-6 h-6">
                  <FaLinkedinIn />
                </span>
              </a>
            </div>
            <div className="hover:text-gray-400 dark:hover:text-gray-300">
              <a
                href="https://www.instagram.com/aiarnob23/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-6 h-6">
                  <FaInstagram />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional content section */}
        <div className="mt-6 text-center">
          <p className="text-sm">For inquiries, please contact us at:</p>
          <p className="text-sm">aiarnob23@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
