import React from "react";
import Post from './Post';

interface PostProps {
  id: number;
  username: string;
  content: string;
  likes: number;
  comments: Array<{
    username: string;
    content: string;
    likes: number;
    time: string;
  }>;
  time: string;
}

interface PostListProps {
  posts: PostProps[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Post key={post.id} {...post} />
    ))}
  </>
);

export default PostList;
