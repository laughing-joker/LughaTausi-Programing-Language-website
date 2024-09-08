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
      <footer className="w-full bg-gray-900 text-white py-8 flex-shrink-0">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:justify-between sm:text-left sm:items-start sm:space-y-0 px-4">
          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info.lughatausi@gmail.com"
                className="text-purple-400 hover:text-purple-600"
              >
                info.lughatausi@gmail.com
              </a>
            </p>
            <p className="text-sm">
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
            <p className="text-sm">Subscribe to our newsletter:</p>
            <form className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-2 py-1 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-1 bg-purple-500 hover:bg-purple-700 text-white rounded"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaFacebookF
                size={16}
                className="text-purple-400 hover:text-purple-600"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaInstagram
                size={16}
                className="text-purple-400 hover:text-purple-600"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaTwitter
                size={16}
                className="text-purple-400 hover:text-purple-600"
              />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaGoogle
                size={16}
                className="text-purple-400 hover:text-purple-600"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaYoutube
                size={16}
                className="text-purple-400 hover:text-purple-600"
              />
            </a>

            {/* Separator for GitHub */}
            <div className="border-l border-gray-300 h-4 mx-2"></div>

            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaGithub
                size={16}
                className="text-purple-400 hover:text-purple-600"
              />
            </a>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center text-gray-400 text-xs mt-4">
          "Empowering communication in every language."
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-1">
          &copy; {new Date().getFullYear()} Designed by Omni Standards
        </div>
      </footer>
    </div>
  );
};

export default Footer;
