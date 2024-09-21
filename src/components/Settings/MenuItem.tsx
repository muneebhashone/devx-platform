'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MenuItemProps {
  item: {
    id: string
    label: string
    icon: LucideIcon
    subItems: { id: string; label: string; icon: LucideIcon }[]
  }
  activeMenuItem: string
  setActiveMenuItem: (id: string) => void
}

export function MenuItem({ item, activeMenuItem, setActiveMenuItem }: MenuItemProps) {
  return (
    <motion.div className="mb-4">
      <div className="flex items-center mb-2">
        <item.icon className="h-5 w-5 text-[#4f7df3] mr-2" />
        <h2 className="text-lg font-semibold text-gray-200">{item.label}</h2>
      </div>
      <ul>
        {item.subItems.map((subItem) => (
          <li key={subItem.id} className="mb-2">
            <motion.button
              onClick={() => setActiveMenuItem(subItem.id)}
              className={`flex items-center w-full px-2 py-1 rounded transition-colors ${
                activeMenuItem === subItem.id 
                  ? 'bg-[#2a3142] text-[#4f7df3]' 
                  : 'text-gray-400 hover:bg-[#2a3142]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <subItem.icon className="h-4 w-4 mr-2" />
              <span>{subItem.label}</span>
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
