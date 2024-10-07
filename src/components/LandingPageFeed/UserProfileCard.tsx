import React from 'react'
import { Card, CardContent } from '../ui/card'

interface User {
  initials: string;
  name: string;
  username: string;
  bio: string;
  followers: number;
  posts: number;
}

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <Card className="bg-secondary mb-6">
      <CardContent className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-lg font-medium">
            {user.initials}
          </div>
          <div className="ml-2">
            <h3 className="font-semibold text-white">{user.name}</h3>
            <p className="text-sm text-muted-white">@{user.username}</p>
          </div>
        </div>
        <p className="text-sm text-white mb-2">
          {user.bio}
        </p>
        <div className="flex justify-between text-sm text-muted-white">
          <span>{user.followers} followers</span>
          <span>{user.posts} posts</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserProfileCard