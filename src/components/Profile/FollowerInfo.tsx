import React from 'react'

interface FollowerInfoProps {
  followers: number;
  following: number;
}

const FollowerInfo: React.FC<FollowerInfoProps> = ({ followers, following }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="text-base ">{followers} followers</p>
      <p className="text-base ">{following} following</p>
    </div>
  )
}

export default FollowerInfo