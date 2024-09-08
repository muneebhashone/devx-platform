"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

import { ThumbsUp, MessageSquare, Share2, Code, Image, Smile, Send, Search, Bell, User, Users, Calendar, Video, Menu, X } from 'lucide-react';

const BackgroundGradient = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
);

interface HeaderProps {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleLeftSidebar, toggleRightSidebar }) => (
  <header className="fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-700 py-2 px-4 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="lg:hidden text-gray-300"
        onClick={toggleLeftSidebar}
      >
        <Menu className="h-6 w-6" />
      </motion.button>
      <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">DevFlow</h1>
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
        <motion.button whileTap={{ scale: 0.95 }} className="text-gray-300">
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

interface SidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  side: 'left' | 'right';
}

const Sidebar: React.FC<SidebarProps> = ({ children, isOpen, onClose, side }) => (
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
          initial={{ x: side === 'left' ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: side === 'left' ? '-100%' : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          className={`fixed ${side}-0 top-0 bottom-0 w-64 bg-gray-800 border-${side === 'left' ? 'r' : 'l'} border-gray-700 p-4 overflow-y-auto z-50`}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="absolute top-2 right-2 text-gray-300 lg:hidden"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </motion.button>
          {children}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => (
  <Sidebar isOpen={isOpen} onClose={onClose} side="left">
    <h2 className="text-lg font-semibold mb-4 text-gray-200">Groups</h2>
    <ul className="mb-8">
      {['React Enthusiasts', 'Python Developers', 'DevOps Unite'].map((group, index) => (
        <li key={index} className="mb-2">
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-left text-gray-300 hover:text-blue-400"
          >
            {group}
          </motion.button>
        </li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mb-4 text-gray-200">Upcoming Events</h2>
    <ul>
      {['Hackathon 2024', 'Web3 Meetup', 'AI in Software Dev'].map((event, index) => (
        <li key={index} className="mb-2 flex items-center text-gray-300">
          <Calendar className="h-4 w-4 mr-2 text-blue-400" />
          <motion.span whileHover={{ x: 5 }}>{event}</motion.span>
        </li>
      ))}
    </ul>
  </Sidebar>
);

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, onClose }) => (
  <Sidebar isOpen={isOpen} onClose={onClose} side="right">
    <Card className="bg-gray-700 mb-6">
      <CardContent className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-medium">JD</div>
          <div className="ml-3">
            <h3 className="font-semibold text-gray-200">John Doe</h3>
            <p className="text-sm text-gray-400">@johndoe_dev</p>
          </div>
        </div>
        <p className="text-sm text-gray-300 mb-2">Full-stack developer | Open source contributor</p>
        <div className="flex justify-between text-sm text-gray-400">
          <span>254 followers</span>
          <span>1.2k posts</span>
        </div>
      </CardContent>
    </Card>
    <h2 className="text-lg font-semibold mb-4 text-gray-200">Recommended to Follow</h2>
    <ul className="mb-8">
      {['Alice (AI Researcher)', 'Bob (DevOps Guru)', 'Charlie (UI/UX Designer)'].map((user, index) => (
        <li key={index} className="mb-3 flex items-center justify-between">
          <span className="text-gray-300">{user}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1 text-xs"
          >
            Follow
          </motion.button>
        </li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mb-4 text-gray-200">Popular Creators</h2>
    <ul>
      {['TechLead', 'CodeWithMosh', 'FunFunFunction'].map((creator, index) => (
        <li key={index} className="mb-2 flex items-center text-gray-300">
          <Users className="h-4 w-4 mr-2 text-purple-400" />
          <motion.span whileHover={{ x: 5 }}>{creator}</motion.span>
        </li>
      ))}
    </ul>
  </Sidebar>
);

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
        className="mb-4 border-b border-gray-700 pb-4"
      >
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
            {username[0].toUpperCase()}
          </div>
          <span className="ml-2 font-medium text-gray-200">{username}</span>
          <span className="ml-2 text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-gray-300 mb-3 font-light">{content}</p>
        <div className="flex justify-between text-gray-500 text-sm">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center ${isLiked ? 'text-blue-400' : 'hover:text-blue-400'}`}
            onClick={handleLike}
          >
            <ThumbsUp className="mr-1 h-4 w-4" /> {likeCount}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center hover:text-green-400"
            onClick={handleShowComments}
          >
            <MessageSquare className="mr-1 h-4 w-4" /> {comments.length}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center hover:text-purple-400"
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
                  className="mt-2 text-sm text-blue-400 hover:text-blue-300"
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

  const DevSocialFeed: React.FC = () => {
    const [posts, setPosts] = useState([
      {
        id: 1,
        username: "alice_dev",
        content: "Just discovered a neat trick in Rust for handling errors. Anyone interested in a thread about it? #RustLang",
        likes: 42,
        time: "2h ago",
        comments: [
          { username: "bob_rust", content: "Absolutely! Please share!", likes: 5, time: "1h ago" },
          { username: "carol_coder", content: "I'm always looking to improve my Rust skills. Count me in!", likes: 3, time: "45m ago" },
          { username: "dave_debugger", content: "Is it about the ? operator? That's my favorite Rust feature!", likes: 2, time: "30m ago" },
          // ... more comments ...
        ]
      },
      {
        id: 2,
        username: "bob_coder",
        content: "Thoughts on the new VSCode update? The AI features are quite impressive! #VSCode #DevTools",
        likes: 38,
        time: "4h ago",
        comments: [
          { username: "eve_engineer", content: "I'm loving the new IntelliCode suggestions!", likes: 7, time: "3h ago" },
          { username: "frank_frontend", content: "The UI feels snappier too. Great update overall!", likes: 4, time: "2h ago" },
          // ... more comments ...
        ]
      },
      {
        id: 3,
        username: "charlie_programmer",
        content: "Working on a new open-source project for optimizing Docker builds. Contributors welcome! #Docker #OpenSource",
        likes: 31,
        time: "6h ago",
        comments: [
          { username: "grace_devops", content: "Sounds interesting! Where can I find the repo?", likes: 6, time: "5h ago" },
          { username: "henry_hacker", content: "I'd love to contribute. What kind of optimizations are you focusing on?", likes: 3, time: "4h ago" },
          // ... more comments ...
        ]
      },
    ]);
  
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  
    return (
      <div className="relative min-h-screen overflow-hidden bg-gray-900 text-gray-200 font-sans">
        <BackgroundGradient />
        <Header 
          toggleLeftSidebar={() => setLeftSidebarOpen(!leftSidebarOpen)}
          toggleRightSidebar={() => setRightSidebarOpen(!rightSidebarOpen)}
        />
        <LeftSidebar isOpen={leftSidebarOpen} onClose={() => setLeftSidebarOpen(false)} />
        <RightSidebar isOpen={rightSidebarOpen} onClose={() => setRightSidebarOpen(false)} />
        <div className="relative z-10 lg:ml-64 lg:mr-64 p-4 mt-16">
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
          
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    );
  };

export default DevSocialFeed;

