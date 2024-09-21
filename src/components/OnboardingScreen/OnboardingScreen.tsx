"use client";



import React from "react";
import { motion } from "framer-motion";
import BackgroundBeamsWithCollision from "./BackgroundBeamsWithCollision";
import LoginCard from "./LoginCard";

const OnboardingScreen: React.FC = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold mb-2 text-white"
            >
              Log in to DevX
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-400"
            >
              Connect and collaborate with fellow developers
            </motion.p>
          </div>

          <LoginCard />

          {/* Commented out additional buttons and links */}
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default OnboardingScreen;
