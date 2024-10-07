import React from "react";

import { motion } from "framer-motion";

interface RecommendedUsersProps {
  user: string;
  icon?: React.ReactNode;
}

const RecommendedUsers: React.FC<RecommendedUsersProps> = ({ user, icon }) => {
  return (
    <ul>
      <li className="mb-3 flex items-center justify-between">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="text-white">{user}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary hover:bg-white text-white hover:text-primary rounded-full px-3 py-1 text-xs"
        >
          Follow
        </motion.button>
      </li>
    </ul>
  );
};

export default RecommendedUsers;
