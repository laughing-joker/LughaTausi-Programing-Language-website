// src/pages/loading.js
import React from 'react';

const LoadingPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 animate-gradientShift">
    <div className="animate-glow text-white text-center">
      <img
        src="/logo.png" // Replace with the path to your logo
        alt="Loading Logo"
        className="h-24 w-24"
      />
    </div>
  </div>
);

export default LoadingPage;
