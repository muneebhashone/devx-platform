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
    <h2 className="text-lg font-semibold mb-4 text-foreground">Groups</h2>
    <ul className="mb-8">
      {['React Enthusiasts', 'Python Developers', 'DevOps Unite'].map((group, index) => (
        <li key={index} className="mb-2">
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-left text-foreground hover:text-blue-400"
          >
            {group}
          </motion.button>
        </li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mb-4 text-foreground">Upcoming Events</h2>
    <ul>
      {['Hackathon 2024', 'Web3 Meetup', 'AI in Software Dev'].map((event, index) => (
        <li key={index} className="mb-2 flex items-center text-foreground">
          <Calendar className="h-4 w-4 mr-2 text-blue-400" />
          <motion.span whileHover={{ x: 5 }}>{event}</motion.span>
        </li>
      ))}
    </ul>
  </Sidebar>
);

export default LeftSidebar;