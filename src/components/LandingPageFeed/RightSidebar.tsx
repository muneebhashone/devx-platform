import React from "react";
import Sidebar from "./Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, onClose }) => (
  <Sidebar isOpen={isOpen} onClose={onClose} side="right">
    <Card className="bg-secondary mb-6">
      <CardContent className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-lg font-medium">
            JD
          </div>
          <div className="ml-2">
            <h3 className="font-semibold text-white">John Doe</h3>
            <p className="text-sm text-muted-white">@johndoe_dev</p>
          </div>
        </div>
        <p className="text-sm text-white mb-2">
          Full-stack developer | Open source contributor
        </p>
        <div className="flex justify-between text-sm text-muted-white">
          <span>254 followers</span>
          <span>1.2k posts</span>
        </div>
      </CardContent>
    </Card>
    <h2 className="text-lg font-semibold mb-4 text-white">
      Recommended to Follow
    </h2>
    <ul className="mb-8">
      {[
        "Alice (AI Researcher)",
        "Bob (DevOps Guru)",
        "Charlie (UI/UX Designer)",
      ].map((user, index) => (
        <li key={index} className="mb-3 flex items-center justify-between">
          <span className="text-white">{user}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary hover:bg-white text-white hover:text-primary rounded-full px-3 py-1 text-xs"
          >
            Follow
          </motion.button>
        </li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mb-4 text-white">
      Popular Creators
    </h2>
    <ul>
      {["TechLead", "CodeWithMosh", "FunFunFunction"].map((creator, index) => (
        <li key={index} className="mb-2 flex items-center text-white">
          <Users className="h-4 w-4 mr-2 text-active" />
          <motion.span whileHover={{ x: 5 }}>{creator}</motion.span>
        </li>
      ))}
    </ul>
  </Sidebar>
);

export default RightSidebar;
