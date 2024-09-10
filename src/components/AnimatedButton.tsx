"use client";

import React, { ReactNode } from 'react';
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button {...props}>{children}</Button>
  </motion.div>
);

export default AnimatedButton;