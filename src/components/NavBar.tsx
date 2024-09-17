"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { PiTranslateBold } from "react-icons/pi";
import { BsSun, BsMoon } from "react-icons/bs";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-900 backdrop-blur-md shadow-md py-2 px-4 rounded-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="space-x-3 flex items-center">
            <Link href="/home/Landing">
              <Button
                as="a"
                variant="link"
                className="relative text-purple-400 text-sm font-medium no-underline focus:outline-none transition-colors duration-300 hover:text-purple-600"
              >
                Home
                <span className="absolute block bottom-[-2px] left-0 w-full h-[2px] bg-purple-400 transition-transform duration-300 transform scale-x-0 origin-left hover:scale-x-100" />
              </Button>
            </Link>
            <Separator className="w-[1px] h-5 bg-purple-400" />

            <Link href="/home/About">
              <Button
                as="a"
                variant="link"
                className="relative text-purple-400 text-sm font-medium no-underline focus:outline-none transition-colors duration-300 hover:text-purple-600"
              >
                About Us
                <span className="absolute block bottom-[-2px] left-0 w-full h-[2px] bg-purple-400 transition-transform duration-300 transform scale-x-0 origin-left hover:scale-x-100" />
              </Button>
            </Link>
            <Separator className="w-[1px] h-5 bg-purple-400" />

            {/* Translator Icon */}
            <PiTranslateBold className="text-purple-400 hover:text-purple-600 text-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 hover:text-purple-500" />

            {/* Theme Toggle */}
            <Button
              className="text-purple-400 hover:text-purple-600 px-4 py-2 text-base font-medium transition duration-500 ease-in-out bg-transparent border border-purple-400 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:text-white rounded-full shadow-md hover:shadow-xl transform hover:scale-110 hover:-translate-y-1"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <BsSun className="text-lg transition-transform duration-500 ease-in-out transform hover:rotate-180" /> // Rotating effect
              ) : (
                <BsMoon className="text-lg transition-transform duration-500 ease-in-out transform hover:rotate-180" /> // Rotating effect
              )}
            </Button>

            <Separator className="w-[1px] h-5 bg-purple-400" />

            <Link href="/home/Documentation">
              <Button
                className="relative text-purple-100 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:bg-purple-600 hover:text-white text-sm transition duration-300 ease-in-out hover:animate-glow border border-purple-400 rounded-lg"
                variant="ghost"
              >
                Documentation
              </Button>
            </Link>

            <Link href="/home/Download">
              <Button className="relative text-white bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 bg-clip-padding border-2 border-transparent rounded-lg text-sm transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-600 hover:to-purple-700 hover:text-white focus:outline-none before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:bg-gradient-to-r before:from-purple-600 before:via-indigo-500 before:to-purple-600 before:bg-clip-padding before:transition-all before:duration-500 before:ease-in-out hover:before:border-transparent hover:before:scale-110 hover:before:opacity-0 before:opacity-20 before:animate-glow">
                <span className="relative">Download</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
