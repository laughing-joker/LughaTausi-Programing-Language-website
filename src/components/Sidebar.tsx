"use client";
import React, { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi"; // For menu and close icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-white bg-purple-600 hover:bg-purple-700 rounded-md fixed top-4 left-4 z-50"
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt2 size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 shadow-lg z-40`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="mt-6">
            <li>
              <a
                href="#home"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
