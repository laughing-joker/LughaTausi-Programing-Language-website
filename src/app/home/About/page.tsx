"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card3"; // Import the Card component
import NewCard from "@/components/Card4"; // Import the NewCard component
import Card6 from "@/components/Card6"; // Import the Card6 component
import React from "react";

const About = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <NavBar />

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 p-6">
        <Card
          title="Our Vision"
          description="We aim to revolutionize the industry by creating innovative solutions."
          imageSrc="/Tausi.png" // Ensure the image path is correct
        />
        <Card
          title="Our Team"
          description="We are a team of skilled professionals dedicated to excellence."
          imageSrc="/ltausi2.png"
        />
        <Card
          title="Our Mission"
          description="Our mission is to deliver quality products that enhance lives."
          imageSrc="/ltico.png"
        />
      </div>

      {/* NewCard Section */}
      <div className="flex justify-center py-6">
        <NewCard
          title="Our Commitment"
          content="We are committed to providing exceptional services to our clients."
          imageSrc="/1.png" // Ensure the image path is correct
        />
      </div>

      {/* DeveloperCard Section */}
      <div className="flex justify-center py-6">
        <Card6
          title="Become a Developer for Our Product"
          description="Join our dynamic team and help us build innovative solutions that make a difference."
          imageSrc="/developer.png" // Ensure the image path is correct
          requirements={[
            "Strong proficiency in JavaScript and React",
            "Experience with backend technologies (e.g., Node.js, Express)",
            "Familiarity with version control systems (e.g., Git)",
            "Ability to work collaboratively in a team environment",
          ]}
          applyLink="https://example.com/apply" // Replace with your application link
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
