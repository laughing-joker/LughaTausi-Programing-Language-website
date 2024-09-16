import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "../../../components/Herosection";
import Card2 from "../../../components/Card2";
import Card5 from "../../../components/Card5";
import ProductFeaturesCard from "@/components/ProductFeaturesCard";

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
        <Card2 />
      </div>
      <div>
        <ProductFeaturesCard />
      </div>
      <div>
        <Card5 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
