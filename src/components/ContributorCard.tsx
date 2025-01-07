"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const ContributorCard = () => {
  return (
    <div className="w-full mx-auto mt-0 px-8 sm:px-6 lg:px-8">
      <div className="min-h-[300px] bg-gray-900 backdrop-blur-none shadow-lg rounded-lg overflow-hidden  p-6 sm:p-8 flex flex-col">
        <h2 className="font-bold text-xl sm:text-2xl mb-4 text-gray-100 text-center">
          Wachangiaji
        </h2>

        {/* Safu ya Avatar */}
        <div className="flex flex-wrap justify-start gap-4 sm:gap-4 lg:gap-6">
          {["lughatausi", "laughing-joker", "blackhacker120"].map(
            (username, index) => (
              <motion.div
                key={index}
                className="relative rounded-full overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0px 0px 10px rgba(147, 112, 219, 0.7)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {/* Kiungo cha kusogeza */}
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-gray-700 rounded-full">
                    <AvatarImage
                      src={`https://github.com/${username}.png`}
                      alt={`Mchangiaji ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                </a>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
