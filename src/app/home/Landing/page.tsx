"use client";
import React from "react";
import HeroSection from "../../../components/Herosection";
import ContributorCard from "@/components/ContributorCard";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 p-4 py-6 md:px-0">
      {/* Hero Section */}
      <div className="w-full">
        <HeroSection />
        <ContributorCard />
      </div>
    </div>
  );
};

export default Landing;
