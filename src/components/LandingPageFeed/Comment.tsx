import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp } from 'lucide-react';

interface CommentProps {
  username: string;
  content: string;
  likes: number;
  time: string;
}

const Comment: React.FC<CommentProps> = ({ username, content, likes, time }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="mb-3 pl-4 border-l-2 border-gray-700"
  >
    <div className="flex items-center mb-1">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium">
        {username[0].toUpperCase()}
      </div>
      <span className="ml-2 text-sm font-medium text-gray-300">{username}</span>
      <span className="ml-2 text-xs text-gray-500">{time}</span>
    </div>
    <p className="text-sm text-gray-400 mb-1">{content}</p>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-xs text-gray-500 hover:text-blue-400 flex items-center"
    >
      <ThumbsUp className="mr-1 h-3 w-3" /> {likes}
    </motion.button>
  </motion.div>
);

export default Comment;
