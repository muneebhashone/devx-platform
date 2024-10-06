import React from "react";
import { motion } from "framer-motion";
import { Menu, Search,Users } from "lucide-react";

import AnimatedNotificationMenu from "./AnimatedNotificationMenu";

import ProfileMenu from "./ProfileMenu";
import { Logo } from "../Logo";

interface HeaderProps {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
  toggleLeftSidebar,
  toggleRightSidebar,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-primary border-b border-secondary py-2 px-4 z-50">
      <div className="mx-auto flex justify-between items-center">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-white"
          onClick={toggleLeftSidebar}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
        <Logo />
        <div className="hidden md:flex flex-grow max-w-xl mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search DevFlow"
              className="w-full bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
         
     

          <div className="hidden md:block">
            <AnimatedNotificationMenu />
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="text-white hidden md:block"
            onClick={toggleRightSidebar}
          >
            <ProfileMenu />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-white"
            onClick={toggleRightSidebar}
          >
            <Users className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
