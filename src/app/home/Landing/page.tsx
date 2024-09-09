import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "../../../components/Herosection";

const Landing = () => {
  return (
    <div className="w-screen min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="w-[1000]">
        <HeroSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
