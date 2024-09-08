import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Image, Smile, Video, Send } from 'lucide-react';

const PostForm: React.FC = () => (
  <Card className="bg-gray-800 border-gray-700 shadow-lg mb-6">
    <CardContent className="p-4">
      <textarea 
        className="w-full bg-transparent text-gray-200 placeholder-gray-500 resize-none focus:outline-none text-sm"
        placeholder="What's happening in your dev world?"
        rows={2}
      />
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-2">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-blue-400"><Code className="h-4 w-4" /></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-green-400"><Image className="h-4 w-4" /></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-yellow-400"><Smile className="h-4 w-4" /></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-red-400 flex items-center">
            <Video className="h-4 w-4 mr-1" /> <span className="text-xs">Live Code</span>
          </motion.button>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
        >
          <Send className="h-4 w-4" />
        </motion.button>
      </div>
    </CardContent>
  </Card>
);

export default PostForm;