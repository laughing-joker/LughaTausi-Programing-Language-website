"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Main content of the page */}</div>
      <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 flex-shrink-0">
        <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:justify-between sm:text-left sm:items-start sm:space-y-0 px-4 sm:px-8">
          {/* Contact Information */}
          <div className="text-center sm:text-left font-bold text-lg sm:text-base text-gray-200 space-y-1">
            <p className="transition-all duration-300 hover:text-purple-400">
              Email:{" "}
              <a
                href="mailto:info.lughatausi@gmail.com"
                className="text-purple-400 hover:text-purple-600"
              >
                info.lughatausi@gmail.com
              </a>
            </p>
            <p className="transition-all duration-300 hover:text-purple-400">
              Contact:{" "}
              <a
                href="tel:+255769298518"
                className="text-purple-400 hover:text-purple-600"
              >
                +255769298518
              </a>
            </p>
          </div>

          {/* Subscription Box */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-gray-300">
              Subscribe to our newsletter:
            </p>
            <form className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-all duration-300 hover:text-purple-600"
            >
              <FaFacebookF
                size={24}
                className="text-purple-400 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-all duration-300 hover:text-purple-600"
            >
              <FaInstagram
                size={24}
                className="text-purple-400 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-all duration-300 hover:text-purple-600"
            >
              <FaTwitter
                size={24}
                className="text-purple-400 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
              />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-all duration-300 hover:text-purple-600"
            >
              <FaGoogle
                size={24}
                className="text-purple-400 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-all duration-300 hover:text-purple-600"
            >
              <FaYoutube
                size={24}
                className="text-purple-400 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
              />
            </a>

            {/* Separator for GitHub */}
            <div className="border-l border-gray-500 h-6 mx-3"></div>

            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-all duration-300 hover:text-purple-600"
            >
              <FaGithub
                size={20}
                className="text-purple-400 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
              />
            </a>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center text-gray-400 text-xs mt-8 font-extrabold transition-all duration-300 hover:text-gray-200">
          "Enriching the younger generation, Empowering the future of our
          nation"
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-1 transition-all duration-300 hover:text-gray-300">
          &copy; {new Date().getFullYear()} Designed by Omni Standards
        </div>
      </footer>
    </div>
  );
};

export default Footer;
