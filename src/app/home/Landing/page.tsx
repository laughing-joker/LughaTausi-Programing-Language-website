import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "../../../components/Herosection";

const Landing = () => {
  return (
    <div className="w-screen h-full md:w-screen">
      <div>
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
