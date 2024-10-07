import React from "react";

import { Calendar, X } from "lucide-react";
import PrimaryHeading from "../PrimaryHeading";
import RecommendedUsers from "./RecommendedUsers";

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => (
  <div className={`bg-primary px-5 py-4 rounded-xl min-h-[85vh] overflow-y-auto md:block ${isOpen ? 'fixed inset-y-0 left-0 z-50 w-64 shadow-lg' : 'hidden'}`}>
     <button onClick={onClose} className="absolute top-4 right-4 md:hidden">
      <X className="h-6 w-6" />
    </button>
    
    <PrimaryHeading className="text-xl mb-5" heading="Groups" />

    <RecommendedUsers user="React Enthusiasts" />
    <RecommendedUsers user="Python Developers" />
    <RecommendedUsers user="DevOps Unite" />
    <PrimaryHeading className="text-xl mb-5 mt-8" heading="Upcoming Events" />

    <RecommendedUsers
      user="Hackathon 2024"
      icon={<Calendar className="h-4 w-4 mr-2 text-active" />}
    />
    <RecommendedUsers
      user="Web3 Meetup"
      icon={<Calendar className="h-4 w-4 mr-2 text-active" />}
    />
    <RecommendedUsers
      user="AI in Software Dev"
      icon={<Calendar className="h-4 w-4 mr-2 text-active" />}
    />
  </div>
);

export default LeftSidebar;
