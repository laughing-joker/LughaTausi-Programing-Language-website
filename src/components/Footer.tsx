"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-transparent fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-transparent backdrop-blur-md shadow-lg py-4 px-8 mt-2 rounded-md">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-gray-600 text-sm">
              <p>
                Contact Us:{" "}
                <a
                  href="mailto:info@lughattaus.com"
                  className="text-purple-400 hover:text-purple-600"
                >
                  info@lughattaus.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="text-purple-400 hover:text-purple-600"
                >
                  +123 456 7890
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-4 text-sm">
          <div className="flex space-x-4 mt-2 justify-center items-cen text-purple-400 hover:text-purple-600">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              <FaFacebookF size={20} /> {/* React Icon for Facebook */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              <FaTwitter size={20} /> {/* React Icon for Twitter */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              <FaInstagram size={20} /> {/* React Icon for Instagram */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600"
            >
              <FaLinkedinIn size={20} /> {/* React Icon for LinkedIn */}
            </a>
          </div>
          &copy; {new Date().getFullYear()} Lugha Tausi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
