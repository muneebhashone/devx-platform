
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

      <li key={item.name} className="flex items-center text-gray-300 hover:text-white hover:font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-2 rounded transition duration-300 ease-in-out">
        <item.icon className="mr-3" size={20} /> {item.name}
      </li>
      ))}

      {/* <li className="flex items-center text-gray-300 hover:text-white hover:font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-2 rounded transition duration-300 ease-in-out">
        <FolderGit2 className="mr-3" size={20} /> Repositories{" "}
        <span className="ml-auto rounded-full font-semibold bg-white px-3 py-3 text-xs leading-none text-black ">
          905
        </span>
      </li>
      <li className="flex items-center text-gray-300 hover:text-white hover:font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-2 rounded transition duration-300 ease-in-out">
        <Boxes className="mr-3" size={20} /> Projects
      </li>
      <li className="flex items-center text-gray-300 hover:text-white hover:font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-2 rounded transition duration-300 ease-in-out">
        <Package className="mr-3" size={20} /> Packages
      </li>
      <li className="flex items-center text-gray-300 hover:text-white hover:font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-2 rounded transition duration-300 ease-in-out">
        <Star className="mr-3" size={20} /> Stars{" "}
        <span className="ml-auto rounded-full font-semibold bg-white px-3 py-3 text-xs leading-none text-black ">
          905
        </span>
      </li> */}
    </ul>
  </nav>
  )
}

export default ProfileSidebarList