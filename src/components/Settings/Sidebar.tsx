'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { MenuItem } from './MenuItem'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MenuItem {
  id: string
  label: string
  icon: LucideIcon
  subItems: { id: string; label: string; icon: LucideIcon }[]
}

interface SidebarProps {
  menuItems: MenuItem[]
  activeMenuItem: string
  setActiveMenuItem: (id: string) => void
}

export function Sidebar({ menuItems, activeMenuItem, setActiveMenuItem }: SidebarProps) {
  return (
    <ScrollArea className="w-64 p-6 bg-[#1e2330] border-r border-gray-700 h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-[#4f7df3] mb-6"
      >
        Settings
      </motion.h1>
      <nav>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            activeMenuItem={activeMenuItem}
            setActiveMenuItem={setActiveMenuItem}
          />
        ))}
      </nav>
    </ScrollArea>
  )
}
