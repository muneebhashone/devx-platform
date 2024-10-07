import React, { useState } from "react";

import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { posts } from "@/dummyData/postData";

const DevSocialFeed: React.FC = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const toggleSidebars = (side: "left" | "right") => {
    if (side === "left") {
      setLeftSidebarOpen(true);
      setRightSidebarOpen(false);
    } else {
      setRightSidebarOpen(true);
      setLeftSidebarOpen(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-primary via-secondary to-primary text-white min-h-screen">
        <Header
          toggleLeftSidebar={() => toggleSidebars("left")}
          toggleRightSidebar={() => toggleSidebars("right")}
        />

        <div className="grid md:grid-cols-5 grid-cols-1 max-w-[1440px] mx-auto pt-24">
          <div className="md:col-span-1">
            <LeftSidebar
              isOpen={leftSidebarOpen}
              onClose={() => setLeftSidebarOpen(false)}
            />
          </div>
          <div className="md:col-span-3 col-span-1 max-w-[80%] mx-auto">
            <PostForm />
            <PostList posts={posts} />
          </div>
          <div className="md:col-span-1">
            <RightSidebar
              isOpen={rightSidebarOpen}
              onClose={() => setRightSidebarOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevSocialFeed;
