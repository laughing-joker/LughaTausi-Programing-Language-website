/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
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
    <div className="flex flex-col">
      <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 flex-shrink-0">
        <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:justify-between sm:text-left sm:items-start sm:space-y-0 px-4 sm:px-8">
          {/* Taarifa za Mawasiliano */}
          <div className="text-center sm:text-left font-bold text-lg sm:text-base text-gray-300 space-y-1">
            <p className="transition-colors duration-300 ">
              Barua pepe:{" "}
              <a
                href="mailto:lughatausi@gmail.com"
                className="text-purple-400 hover:text-purple-500"
              >
                lughatausi@gmail.com
              </a>
            </p>
            <p className="transition-colors duration-300">
              Mawasiliano:{" "}
              <a
                href="tel:+255752497162"
                className="text-purple-400 hover:text-purple-500"
              >
                +255752497162
              </a>
            </p>
          </div>

          {/* Kisanduku cha Kujisajili */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-gray-300 mb-2">
              Jisajili kwa jarida letu:
            </p>
            <form className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Ingiza barua pepe yako"
                className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition-colors duration-300 hover:shadow-xl hover:shadow-purple-600/60"
              >
                Jisajili
              </button>
            </form>
          </div>

          {/* Viungo vya Mitandao ya Kijamii */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/lugha_tausi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-75 hover:text-purple-500"
            >
              <FaInstagram
                size={24}
                className="text-purple-400 hover:text-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/60"
              />
            </a>

            {/* Kivuko cha GitHub */}
            <div className="border-l border-gray-500 h-6 mx-3"></div>

            <a
              href="https://github.com/lughatausi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-75 hover:text-purple-500"
            >
              <FaGithub
                size={20}
                className="text-purple-400 hover:text-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/60"
              />
            </a>
          </div>
        </div>

        {/* Kauli Mbiu */}
        <div className="text-center text-gray-400 text-xs mt-8 font-extrabold transition-colors duration-300 hover:text-gray-300 cursor-default">
          "Kuimarisha kizazi cha vijana, Kuwezesha mustakabali wa taifa letu"
        </div>

        {/* Haki za Nakala */}
        <div className="text-center text-gray-500 text-xs mt-1 transition-colors duration-300 hover:text-gray-300 cursor-default">
          &copy; {new Date().getFullYear()} Imetengenezwa na Omni Standards
        </div>
      </footer>
    </div>
  );
};

export default Footer;
