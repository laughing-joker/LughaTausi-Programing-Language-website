import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar"; // Import the Sidebar component
import React from "react";

const Documentation = () => {
  return (
    <div className="relative w-screen min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-64 p-6">
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main className="pt-6">
          {/* Your documentation content goes here */}
          <h1 className="text-3xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-700">Welcome to the documentation page.</p>
          {/* Add more content as needed */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Documentation;
