"use client";
import Sidebar from "@/components/Sidebar"; // Import the Sidebar component
import React, { useState } from "react";

const Documentation = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main
          className={`flex-1 p-4 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          } transition-all duration-300`}
        >
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Documentation;
