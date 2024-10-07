import React from "react";

interface SocialLinkProps {
  icon: React.ReactNode;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 py-2">
      <div>{icon}</div>
      <p className="text-lg text-content">{text}</p>
    </div>
  );
};

export default SocialLink;
