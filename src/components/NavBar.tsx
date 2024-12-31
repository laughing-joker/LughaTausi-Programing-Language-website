"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BsSun, BsMoon, BsList, BsX } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPreference)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-gray-900 backdrop-blur-md shadow-md ${
        isMenuOpen ? "transition-colors bg-opacity-90" : "bg-opacity-100"
      }`}
    >
      <div className="flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-3 items-center">
          <Link href="/home/Landing">
            <Button variant="link" className="text-purple-400 text-sm font-medium hover:text-purple-600">
              Home
            </Button>
          </Link>
          <Separator className="w-[1px] h-5 bg-purple-400" />
          <Link href="/home/About">
            <Button variant="link" className="text-purple-400 text-sm font-medium hover:text-purple-600">
              Explore
            </Button>
          </Link>

          {/* Separator before the theme toggle */}
          <Separator className="w-[1px] h-5 bg-purple-400" />

          {/* Desktop Theme Toggle (between Explore and Documentation) */}
          <Button
            onClick={toggleTheme}
            className="text-purple-400 text-lg hover:text-purple-600 mx-2 "
          >
            {isDarkMode ? <BsMoon className="w-4 h-4" /> : <BsSun className="w-4 h-4" />}
          </Button>

          <Separator className="w-[1px] h-5 bg-purple-400" />
          <Link href="/home/Documentation">
            <Button className="relative text-purple-100 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:bg-purple-600 hover:text-white text-sm transition duration-300 ease-in-out hover:animate-glow border border-purple-400 rounded-lg">
              Documentation
            </Button>
          </Link>
          <Link href="/home/Download">
            <Button className="relative text-white bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 border border-transparent rounded-lg text-sm transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-600 hover:to-purple-700 focus:outline-none">
              Download
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center">
          {/* Mobile Theme Toggle (to the left of the hamburger menu) */}
          <Button
            onClick={toggleTheme}
            className={`text-purple-400 text-sm sm:text-lg hover:text-purple-600 mr-2`} // Adjust size for mobile
          >
            {isDarkMode ? <BsMoon className="" /> : <BsSun className="" />}
          </Button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-purple-400 text-sm sm:text-lg p-1 rounded-md hover:bg-purple-600 hover:text-white transition-all ${
              isMenuOpen ? "bg-purple-600 text-white" : "bg-transparent"
            }`}
          >
            {isMenuOpen ? <BsX className="w-5 h-5" /> : <BsList className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-gray-900 text-purple-400 transition-all duration-500 ease-in-out`}
        >
          <Link href="/home/Landing">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left text-sm py-2">
              Home
            </Button>
          </Link>
          <Link href="/home/About">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left text-sm py-2">
              Explore
            </Button>
          </Link>
          <Link href="/home/Documentation">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left text-sm py-2">
              Documentation
            </Button>
          </Link>
          <Link href="/home/Download">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left text-sm py-2">
              Download
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
