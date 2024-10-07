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
import Header from "../LandingPageFeed/Header";
import SocialLink from "./SocialLink";
import FollowerInfo from "./FollowerInfo";
import PrimaryContent from "../PrimaryContent";
import PrimaryHeading from "../PrimaryHeading";


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
    <>
      <Header toggleLeftSidebar={() => {}} toggleRightSidebar={() => {}} />
      {/* <BackgroundGradient /> */}
      <div className="bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-[1440px] mx-auto py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Left sidebar */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="bg-primary rounded-lg overflow-hidden">
                <ProfileHeader
                  coverPhoto="/assets/images/profile.png"
                  profilePhoto="/assets/images/profile.png"
                  username="Chris Coyier"
                  handle="chriscoyier"
                />
                <div className="p-6 pt-0">
                  <div className="mb-6">
                    <PrimaryHeading heading="About" />
                    <PrimaryContent content="Web designer and developer. Co-founder of CodePen. Host of ShopTalk Show. Creator of CSS-Tricks." />
                  </div>
                  <ProfileSidebarList sidebarItems={dummySidebarItems} />
                  <div className="mt-6">
                    <FollowerInfo followers={10800} following={274} />
                    <div className="space-y-2 text-sm text-content mb-6">
                      <SocialLink icon={<Github />} text="@codepen" />
                      <SocialLink
                        icon={<Mail />}
                        text="chriscoyier@gmail.com"
                      />
                      <SocialLink icon={<MapPin />} text="Bend, Oregon" />
                      <SocialLink icon={<LinkIcon />} text="chriscoyier.net" />
                    </div>
                    <Button className="w-full bg-secondary font-semibold text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-active hover:text-white">
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid gap-8">
                <div className="bg-primary rounded-lg p-6">
                  <PrimaryHeading heading="Stories" />
                  <StorySection
                    stories={stories}
                    onStoryClick={handleStoryClick}
                  />
                </div>
                {/* Feed */}
                <div className="bg-primary rounded-lg p-6">
                  <PrimaryHeading heading="Feed" />
                  {/* <PostForm /> */}
                  <PostList posts={dummyPosts} />
                </div>
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
    </>
  );
};

export default UserProfileComponent;
