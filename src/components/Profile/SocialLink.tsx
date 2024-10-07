import React from "react";

interface SocialLinkProps {
  icon: React.ReactNode;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-4 h-4">{icon}</div>
      <p className="text-base ">{text}</p>
    </div>
  );
};

export default SocialLink;
