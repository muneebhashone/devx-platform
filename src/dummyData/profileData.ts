import { FolderGit2, Boxes, Star, Users } from "lucide-react";
import { Post, SidebarItem, Story } from "../types/profile";

export const dummyPosts: Post[] = [
  {
    id: 1,
    username: "Chris Coyier",
    content: "Just launched a new CSS tutorial on CodePen. Check it out!",
    likes: 42,
    comments: [
      {
        username: "CSSFan",
        content: "Great tutorial! Thanks for sharing.",
        likes: 5,
        time: "2h ago",
      },
    ],
    time: "3h ago",
  },
  {
    id: 2,
    username: "Chris Coyier",
    content: "Working on some new SVG animations. Can't wait to share!",
    likes: 38,
    comments: [],
    time: "5h ago",
  },
];

export const dummySidebarItems: SidebarItem[] = [
  { name: "Repositories", icon: FolderGit2 },
  { name: "Projects", icon: Boxes },
  { name: "Stars", icon: Star },
  { name: "Followers", icon: Users },
  { name: "Following", icon: Users },
];

export const dummyStories: Story[] = [
  {
    id: 1,
    username: "Chris Coyier",
    image: "/assets/images/profile.png",
    profilePic: "/assets/images/profile.png",
  },
  {
    id: 2,
    username: "Sarah Drasner",
    image: "/assets/images/profile.png",
    profilePic: "/assets/images/profile.png",
  },
  {
    id: 3,
    username: "Dan Abramov",
    image: "/assets/images/profile.png",
    profilePic: "/assets/images/profile.png",
  },
  {
    id: 4,
    username: "Add Story",
    image: "/assets/images/profile.png",
    profilePic: "/assets/images/profile.png",
    isAddStory: true,
  },
];