import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";

const home = () => {
  return (
    <div className="w-screen min-h-screen">
      <div>
        <NavBar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default home;
