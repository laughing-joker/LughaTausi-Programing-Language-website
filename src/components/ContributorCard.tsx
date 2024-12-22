"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const ContributorCard = () => {
  return (
    <div className="w-full mx-auto mt-0 px-4 sm:px-6 lg:px-8"> {/* Added dynamic padding for responsiveness */}
      <div className="min-h-[300px] bg-[#2D2D44]/20 backdrop-blur-md shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col items-center">
        <h2 className="font-bold text-xl sm:text-2xl mb-4 text-gray-100 text-center">
          Contributors
        </h2>

        {/* Avatar Row */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6"> {/* Flex-wrap for better responsiveness */}
          {["lughatausi", "laughing-joker", "blackhacker120"].map(
            (username, index) => (
              <motion.div
                key={index}
                className="relative rounded-full overflow-hidden"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0], // Reverse rotation
                  boxShadow: "0px 0px 20px rgba(147, 112, 219, 0.8)", // Stronger purple glow effect
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15, // Controls the oscillation damping
                }}
              >
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-gray-700 rounded-full">
                  <AvatarImage
                    src={`https://github.com/${username}.png`}
                    alt={`Contributor ${index + 1}`}
                    className="w-full h-full object-cover" // Ensures the image fills the entire avatar
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
