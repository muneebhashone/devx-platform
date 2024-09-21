import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedButton from "./AnimatedButton";
import { Github } from "lucide-react";

const LoginCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <Card className="bg-gray-800 bg-opacity-80 border-gray-700 shadow-lg backdrop-blur-sm">
        <CardContent className="space-y-4 pt-6">
          <AnimatedButton
            className="w-full bg-white hover:bg-gray-100 hover:text-black text-black font-semibold"
            variant="outline"
          >
            <Github className="mr-2 h-5 w-5" /> Continue with GitHub
          </AnimatedButton>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LoginCard;
