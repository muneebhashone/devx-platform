import React from 'react'

interface PrimaryContentProps {
  content: string;
}

const PrimaryContent: React.FC<PrimaryContentProps> = ({ content }) => {
  return (
    <div>
      <p className="text-sm text-content">{content}</p>
    </div>
  );
};

export default PrimaryContent