"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-screen fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="bg-transparent backdrop-blur-md shadow-lg py-2 px-8 mt-2 rounded-md">
        <div className="flex justify-between items-center">
          <div className="">
            <img src="/Logo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="space-x-4 flex items-center">
            <Button
              className="text-purple-400" // Adjusted text color for visibility
              variant="link"
              as="a"
              href="#home"
            >
              Home
            </Button>
            <Button
              className="text-purple-400"
              variant="link"
              as="a"
              href="#about"
            >
              About Us
            </Button>
            <Button
              className="text-purple-400 bg-gray-900 hover:bg-purple-600 hover:text-white"
              variant="ghost"
              as="a"
              href="#contact"
            >
              Documentation
            </Button>

            <Button
              className="text-gray-600 border border-gray-300 bg-gray-100 hover:bg-purple-600 hover:text-white outline-none"
              variant="outline"
              as="a"
              href="#contact"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
