import React from "react";
import { motion } from "framer-motion";
import { Menu, Search, Bell, User, Users } from "lucide-react";

interface HeaderProps {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
  toggleLeftSidebar,
  toggleRightSidebar,
}) => (
  // ... existing Header component code
  <header className="fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-700 py-2 px-4 z-50">
    <div className="mx-auto flex justify-between items-center">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="lg:hidden text-gray-300"
        onClick={toggleLeftSidebar}
      >
        <Menu className="h-6 w-6" />
      </motion.button>
      <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        DevFlow
      </h1>
      <div className="hidden md:flex flex-grow max-w-xl mx-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search DevFlow"
            className="w-full bg-gray-700 text-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <motion.button whileTap={{ scale: 0.95 }} className="text-gray-300">
          <Bell className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="text-gray-300 hidden lg:block"
          onClick={toggleRightSidebar}
        >
          <User className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-gray-300"
          onClick={toggleRightSidebar}
        >
          <Users className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  </header>
);

export default Header;
