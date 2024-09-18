"use client";
import React from "react";
import HeroSection from "../../../components/Herosection";
import Card2 from "../../../components/Card2";
import Card5 from "../../../components/Card5";
import ProductFeaturesCard from "@/components/ProductFeaturesCard";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4 md:p-8">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Responsive Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <Card2 />
        <Card5 />
        <ProductFeaturesCard />
      </div>
    </div>
  );
};

export default Landing;
