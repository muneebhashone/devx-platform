"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

interface Story {
  id: number;
  username: string;
  image: string;
  profilePic: string;
  isAddStory?: boolean;
}

interface StorySectionProps {
  stories: Story[];
  onStoryClick: (story: Story) => void;
}

const StorySection: React.FC<StorySectionProps> = ({
  stories,
  onStoryClick,
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      <div
        key="add-story"
        className="flex flex-col items-center space-y-1 cursor-pointer"
        onClick={() => onStoryClick({ id: 0, username: "Add Story", image: "", profilePic: "", isAddStory: true })}
      >
        <div className="w-20 h-20 rounded-full overflow-hidden relative border-4 bg-gradient-to-r from-blue-500 to-purple-600 p-[3px]">
          <div className="w-full h-full rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <Plus className="text-pink-500" size={24} />
            </div>
          </div>
        </div>
        <p className="font-medium text-white truncate w-16 text-center">
          Add Story
        </p>
      </div>
      {stories.filter(story => !story.isAddStory).map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center space-y-1 cursor-pointer"
          onClick={() => onStoryClick(story)}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden relative border-4 bg-gradient-to-r from-blue-500 to-purple-600 p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src={story.image}
                alt={story.username}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <p className="font-medium text-white truncate w-16 text-center">
            {story.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StorySection;
