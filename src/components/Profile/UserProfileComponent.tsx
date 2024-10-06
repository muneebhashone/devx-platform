"use client";

import React, { useState } from "react";
import { Github, Mail, MapPin, Link as LinkIcon } from "lucide-react";

import PostList from "../LandingPageFeed/PostList";
import { Button } from "../ui/button";
import ProfileSidebarList from "./ProfileSidebarList";
import StorySection from "./StorySection";
import StoryModal from "./StoryModal";
import StoryUploadModal from "./StoryUploadModal";
import ProfileHeader from "./ProfileHeader";
import { Story } from "../../types/profile";
import {
  dummyPosts,
  dummySidebarItems,
  dummyStories,
} from "../../dummyData/profileData";

const UserProfileComponent: React.FC = () => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(
    null
  );

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [stories, setStories] = useState<Story[]>(dummyStories);

  const handleStoryClick = (story: Story) => {
    if (story.isAddStory) {
      setIsUploadModalOpen(true);
    } else {
      const index = stories.findIndex((s) => s.id === story.id);
      setSelectedStoryIndex(index);
    }
  };

  const handleCloseModal = () => {
    setSelectedStoryIndex(null);
  };

  const handleUpload = (file: File) => {
    const newStory: Story = {
      id: Math.max(...stories.map((s) => s.id)) + 1,
      username: "Your Username", // Replace with actual username
      image: URL.createObjectURL(file),
      profilePic: "/assets/images/profile.png", // Replace with actual profile pic
    };

    setStories((prevStories) => [
      newStory,
      ...prevStories.filter((story) => !story.isAddStory),
      prevStories.find((story) => story.isAddStory)!, // Keep the "Add Story" at the end
    ]);
  };

  return (
    <div className="bg-background text-foreground">
      <div className="max-w-[1920px] mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar */}
          <div className="md:w-1/4 flex flex-col gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <ProfileHeader
                coverPhoto="/assets/images/profile.png"
                profilePhoto="/assets/images/profile.png"
                username="Chris Coyier"
                handle="chriscoyier"
              />
              <div className="p-6 pt-0">
                {" "}
                {/* Changed padding here */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">About</h2>
                  <p className="text-sm text-gray-400">
                    Web designer and developer. Co-founder of CodePen. Host of
                    ShopTalk Show. Creator of CSS-Tricks.
                  </p>
                </div>
                <ProfileSidebarList sidebarItems={dummySidebarItems} />
                <div className="mt-6">
                  <p className="text-sm text-gray-400 mb-4">
                    10.8k followers · 274 following
                  </p>
                  <div className="space-y-2 text-sm text-gray-400 mb-6">
                    <p className="flex items-center">
                      <Github className="mr-2" size={16} /> @codepen
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-2" size={16} /> chriscoyier@gmail.com
                    </p>
                    <p className="flex items-center">
                      <MapPin className="mr-2" size={16} /> Bend, Oregon
                    </p>
                    <p className="flex items-center">
                      <LinkIcon className="mr-2" size={16} /> chriscoyier.net
                    </p>
                  </div>
                  <Button className="w-full bg-gray-700 font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:w-2/3">
            <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-200">Stories</h2>
              <StorySection stories={stories} onStoryClick={handleStoryClick} />
            </div>
            {/* Feed */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-8">Feed</h2>
              {/* <PostForm /> */}
              <PostList posts={dummyPosts} />
            </div>
          </div>
        </div>
      </div>
      {selectedStoryIndex !== null && (
        <StoryModal
          stories={stories.filter((story) => !story.isAddStory)}
          initialStoryIndex={selectedStoryIndex}
          onClose={handleCloseModal}
        />
      )}
      {isUploadModalOpen && (
        <StoryUploadModal
          onClose={() => setIsUploadModalOpen(false)}
          onUpload={handleUpload}
        />
      )}
    </div>
  );
};

export default UserProfileComponent;
