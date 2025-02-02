import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const ContributorCard = () => {
  return (
    <div className="w-full">
      <div className="min-h-[300px] bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 shadow-xl overflow-hidden p-6 sm:p-8 flex flex-col">
        <h2 className="font-bold text-3xl sm:text-4xl mb-4 text-gray-100 text-center drop-shadow-lg">
          Wachangiaji
        </h2>
        {/* Safu ya Avatar */}
        <div className="flex flex-wrap justify-start gap-4 sm:gap-4 lg:gap-6">
          {[
            "lughatausi",
            "laughing-joker",
            "blackhacker120",
            "ChrissTuruka",
            "wenses", // Added GitHub user
            "FESG3002", // Newly added user
          ].map((username, index) => (
            <motion.div
              key={index}
              className="relative rounded-full overflow-hidden"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                boxShadow: "0px 0px 20px rgba(147, 112, 219, 0.8)", // Subtle purple glow
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
                <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-gray-700 hover:border-purple-400 rounded-full transition-all duration-300">
                  <AvatarImage
                    src={`https://avatars.githubusercontent.com/${username}`}
                    alt={`Mchangiaji ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
              </a>
            </motion.div>
          ))}
          {/* Instagram Avatar with manually added image */}
          <motion.div
            className="relative rounded-full overflow-hidden"
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              boxShadow: "0px 0px 20px rgba(147, 112, 219, 0.8)", // Subtle purple glow
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <a
              href="https://www.instagram.com/thisismasako"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-gray-700 hover:border-purple-400 rounded-full transition-all duration-300">
                {/* Manually added Instagram Profile Picture */}
                <AvatarImage
                  src="/Masako.jpg" // Manually input image URL
                  alt="Mchangiaji Instagram"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>IM</AvatarFallback>
              </Avatar>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
