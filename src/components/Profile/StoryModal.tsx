"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Story {
  id: number;
  username: string;
  image: string;
  profilePic: string;
}

interface StoryModalProps {
  stories: Story[];
  initialStoryIndex: number;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ stories, initialStoryIndex, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          handleNextStory();
          return 0;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentStoryIndex]);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setProgress(0);
    }
  };

  const currentStory = stories[currentStoryIndex];

  return (
    <div className="fixed inset-0 bg-background bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600">
          <div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 flex items-center">
            <Image
              src={currentStory.profilePic}
              alt={`${currentStory.username}'s profile`}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <span className="text-white font-semibold">{currentStory.username}</span>
            <button
              onClick={onClose}
              className="ml-auto text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>
          <div className="relative h-[60vh]">
            <Image
              src={currentStory.image}
              alt={currentStory.username}
              layout="fill"
              objectFit="cover"
            />
            <button
              onClick={handlePrevStory}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
              disabled={currentStoryIndex === 0}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNextStory}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
              disabled={currentStoryIndex === stories.length - 1}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;