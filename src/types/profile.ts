import { LucideIcon } from "lucide-react";

export interface Comment {
  username: string;
  content: string;
  likes: number;
  time: string;
}

export interface Post {
  id: number;
  username: string;
  content: string;
  likes: number;
  comments: Comment[];
  time: string;
}

export interface SidebarItem {
  name: string;
  icon: LucideIcon;
}

export interface Story {
  id: number;
  username: string;
  image: string;
  profilePic: string;
  isAddStory?: boolean;
}