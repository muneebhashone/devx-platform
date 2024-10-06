
import React from 'react'

interface SidebarItem {
  name: string;
  icon: React.ElementType;
}

interface ProfileSidebarListProps {
  sidebarItems: SidebarItem[];
}

const ProfileSidebarList = ({sidebarItems}: ProfileSidebarListProps) => {
  return (
    <nav className="mb-6">
        <ul className="space-y-4">
      {sidebarItems.map((item) => (

      <li key={item.name} className="flex items-center text-foreground hover:text-white hover:font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-2 rounded transition duration-300 ease-in-out">
        <item.icon className="mr-3" size={20} /> {item.name}
      </li>
      ))}

    </ul>
  </nav>
  )
}

export default ProfileSidebarList