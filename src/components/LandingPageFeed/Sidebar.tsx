import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  side: "left" | "right";
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  isOpen,
  onClose,
  side,
}) => (
  <>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: side === "left" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: side === "left" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className={`fixed ${side}-0 top-0 bottom-0 w-full lg:w-80 bg-gray-800 border-${
              side === "left" ? "r" : "l"
            } border-gray-700 p-4 overflow-y-auto z-50 lg:hidden`}
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="absolute top-2 right-2 text-gray-300"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </motion.button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
    <div
      className={`hidden lg:block fixed ${side}-0 lg:mt-[57px] top-0 bottom-0 w-1/2 lg:w-80 bg-gray-800 border-${
        side === "left" ? "r" : "l"
      } border-gray-700 p-4 overflow-y-auto`}
    >
      {children}
    </div>
  </>
);

export default Sidebar;
