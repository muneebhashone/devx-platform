import React from 'react';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => (
  <Sidebar isOpen={isOpen} onClose={onClose} side="left">
    <h2 className="text-lg font-semibold mb-4 text-white">Groups</h2>
    <ul className="mb-8">
      {['React Enthusiasts', 'Python Developers', 'DevOps Unite'].map((group, index) => (
        <li key={index} className="mb-2">
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-left text-white hover:opacity-90"
          >
            {group}
          </motion.button>
        </li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mb-4 text-white">Upcoming Events</h2>
    <ul>
      {['Hackathon 2024', 'Web3 Meetup', 'AI in Software Dev'].map((event, index) => (
        <li key={index} className="mb-2 flex items-center text-white">
          <Calendar className="h-4 w-4 mr-2 text-active" />
          <motion.span whileHover={{ x: 5 }}>{event}</motion.span>
        </li>
      ))}
    </ul>
  </Sidebar>
);

export default LeftSidebar;