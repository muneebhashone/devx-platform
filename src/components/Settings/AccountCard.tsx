'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from 'framer-motion'
import { Pencil, Check } from 'lucide-react'

interface AccountCardProps {
  isEditing: boolean
  handleEdit: () => void
  handleSave: () => void
  showSaveConfirmation: boolean
}

export function AccountCard({ isEditing, handleEdit, handleSave, showSaveConfirmation }: AccountCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="mb-6 bg-[#2a3142] border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-gray-200">Account</CardTitle>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" onClick={handleEdit}>
              <Pencil className="h-4 w-4 text-[#4f7df3]" />
            </Button>
          </motion.div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="userId" className="text-gray-400">User ID</Label>
            <Input id="userId" value="d39d12b0" readOnly className="bg-[#1e2330] border-gray-700 text-gray-200" />
          </div>
          <div>
            <Label htmlFor="name" className="text-gray-400">Name</Label>
            <Input id="name" defaultValue="John Doe" readOnly={!isEditing} className="bg-[#1e2330] border-gray-700 text-gray-200" />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-400">Email</Label>
            <Input id="email" defaultValue="j*****@example.com" readOnly={!isEditing} className="bg-[#1e2330] border-gray-700 text-gray-200" />
          </div>

          <AnimatePresence>
            {isEditing && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <Button onClick={handleSave} className="w-full bg-[#4f7df3] hover:bg-[#3a67d6] text-white">
                  Save Changes
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showSaveConfirmation && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="flex items-center justify-center text-green-400">
                <Check className="mr-2" /> Changes saved successfully
              </motion.div>
            )}
          </AnimatePresence>

          <Button variant="destructive" className="w-full mt-4 bg-red-600 hover:bg-red-700">
            Close my account
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
