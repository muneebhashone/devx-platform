"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Lock, UserCircle2 } from "lucide-react";
import BackgroundBeamsWithCollision from "./BackgroundBeamsWithCollision";
import AnimatedButton from "./AnimatedButton";

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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="bg-gray-800 bg-opacity-80 border-gray-700 shadow-lg backdrop-blur-sm">
              <CardContent className="space-y-4 pt-6">
                <AnimatedButton
                  className="w-full bg-white hover:bg-gray-100 text-black font-semibold"
                  variant="outline"
                >
                  <Github className="mr-2 h-5 w-5" /> Continue with GitHub
                </AnimatedButton>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="space-y-4"
          >
            <AnimatedButton
              className="w-full bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white border border-gray-700 backdrop-blur-sm"
              variant="outline"
            >
              <Lock className="mr-2 h-5 w-5" /> Continue with SAML SSO
            </AnimatedButton>
            <AnimatedButton
              className="w-full bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white border border-gray-700 backdrop-blur-sm"
              variant="outline"
            >
              <UserCircle2 className="mr-2 h-5 w-5" /> Login with Passkey
            </AnimatedButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center"
          >
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
            >
              Continue with Email →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default OnboardingScreen;
