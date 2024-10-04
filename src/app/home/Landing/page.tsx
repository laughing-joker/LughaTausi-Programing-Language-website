"use client";
import React from "react";
import HeroSection from "../../../components/Herosection";
import Card2 from "../../../components/Card2";
import Card5 from "../../../components/Card5";
import ProductFeaturesCard from "@/components/ProductFeaturesCard";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 p-4 py-6 md:px-6">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Responsive Cards Section - Each Card in a Row */}
      <div className="grid grid-cols-1 gap-6 w-full">
        <Card2 />
        <div className="flex flex-row">
          <Card5 />
        </div>

        <div className="">
          <ProductFeaturesCard className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
