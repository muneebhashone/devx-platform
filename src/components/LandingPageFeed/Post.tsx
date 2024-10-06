
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import Comment from './Comment';

interface CommentProps {
  username: string;
  content: string;
  likes: number;
  time: string;
}

interface PostProps {
  id: number;
  username: string;
  content: string;
  likes: number;
  comments: CommentProps[];
  time: string;
}

const Post: React.FC<PostProps> = ({username, content, likes, comments, time }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const [showComments, setShowComments] = useState(false);
    const [visibleComments, setVisibleComments] = useState(3);
  
    const handleLike = () => {
        if (isLiked) {
          setLikeCount(likeCount - 1);
        } else {
          setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
      };
    
      const handleShowComments = () => {
        setShowComments(!showComments);
      };
    
      const handleLoadMoreComments = () => {
        setVisibleComments(visibleComments + 10);
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 border-2 p-4 rounded-lg border-secondary pb-4 shadow-lg"
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-secondary border-2 text-white text-sm font-medium">
              {username[0].toUpperCase()}
            </div>
            <span className="ml-2 font-medium text-white">{username}</span>
            <span className="ml-2 text-xs text-white">{time}</span>
          </div>
          <p className="text-content opacity-90 mb-3 font-light">{content}</p>
          <div className="flex justify-between text-white text-sm">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center ${isLiked ? 'text-active' : 'hover:text-white'}`}
              onClick={handleLike}
            >
              <ThumbsUp className="mr-1 h-4 w-4" /> {likeCount}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center hover:text-active"
              onClick={handleShowComments}
            >
              <MessageSquare className="mr-1 h-4 w-4" /> {comments.length}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center hover:text-active"
            >
              <Share2 className="mr-1 h-4 w-4" /> Share
            </motion.button>
          </div>
          <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {comments.slice(0, visibleComments).map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
            {visibleComments < comments.length && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 text-sm text-content hover:text-active"
                onClick={handleLoadMoreComments}
              >
                Load More Comments
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Post;