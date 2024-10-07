import React from "react";
import { Users, X } from "lucide-react";
import UserProfileCard from "./UserProfileCard";
import PrimaryHeading from "../PrimaryHeading";
import RecommendedUsers from "./RecommendedUsers";

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, onClose }) => (
  <div className={`bg-primary px-5 py-4 rounded-xl min-h-[85vh] overflow-y-auto md:block ${isOpen ? 'fixed inset-y-0 right-0 z-50 w-64 shadow-lg' : 'hidden'}`}>
    <button onClick={onClose} className="absolute top-4 right-4 md:hidden">
      <X className="h-6 w-6" />
    </button>
    <UserProfileCard
      user={{
        initials: "JD",
        name: "John Doe",
        username: "johndoe_dev",
        bio: "Full-stack developer | Open source contributor",
        followers: 254,
        posts: 1200,
      }}
    />

    <PrimaryHeading className="text-xl mb-5" heading="Recommended to Follow" />
    <ul className="mb-8">
      <RecommendedUsers user="Alice (AI Researcher)" />
      <RecommendedUsers user="Bob (DevOps Guru)" />
      <RecommendedUsers user="Charlie (UI/UX Designer)" />
    </ul>
    <PrimaryHeading className="text-xl mb-5" heading="Popular Creators" />
    <ul>
      <RecommendedUsers
        user="TechLead"
        icon={<Users className="h-4 w-4 mr-2 text-active" />}
      />
      <RecommendedUsers
        user="CodeWithMosh"
        icon={<Users className="h-4 w-4 mr-2 text-active" />}
      />
      <RecommendedUsers
        user="FunFunFunction"
        icon={<Users className="h-4 w-4 mr-2 text-active" />}
      />
    </ul>
  </div>
);

export default RightSidebar;
