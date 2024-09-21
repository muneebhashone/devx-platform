import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, CheckCheck } from 'lucide-react'

type Notification = {
  id: number
  message: string
  isNew: boolean
}

export default function AnimatedNotificationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "You have a new message!", isNew: true },
    { id: 2, message: "Your order has been shipped", isNew: true },
    { id: 3, message: "Payment received", isNew: false },
  ])
  const [isRinging, setIsRinging] = useState(false)

  const unreadCount = notifications.filter(n => n.isNew).length

  const toggleMenu = () => setIsOpen(!isOpen)

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isNew: false } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isNew: false })))
  }

  // Mock function to simulate new notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: `New notification at ${new Date().toLocaleTimeString()}`,
        isNew: true
      }
      setNotifications(prev => [newNotification, ...prev])
      setIsRinging(true)
      setTimeout(() => setIsRinging(false), 1000) // Stop ringing after 1 second
    }, 10000) // New notification every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-900 text-gray-200">
      <style jsx global>{`
        @keyframes ring {
          0% { transform: rotate(0); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(15deg); }
          40% { transform: rotate(-15deg); }
          50% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        .ringing {
          animation: ring 1s ease;
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="relative inline-block text-left">
        <button
          onClick={toggleMenu}
          className={`relative p-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full bg-gray-800 ${isRinging ? 'ringing' : ''}`}
          aria-label="Notifications"
        >
          <Bell className="h-6 w-6" />
          <AnimatePresence>
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full"
              >
                {unreadCount}
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 divide-y divide-gray-700 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <div className="px-4 py-2 bg-gray-700 text-gray-200 font-semibold flex justify-between items-center">
                  <span>Notifications</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center"
                      aria-label="Mark all as read"
                    >
                      <CheckCheck className="h-4 w-4 mr-1" />
                      <span className="sr-only">Mark all as read</span>
                    </button>
                    <button onClick={toggleMenu} className="text-gray-400 hover:text-gray-200">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto hide-scrollbar">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={notification.isNew ? { backgroundColor: "#2D3748" } : {}}
                      animate={{ backgroundColor: "#1A202C" }}
                      transition={{ duration: 0.5 }}
                      className="px-4 py-3 hover:bg-gray-700 transition duration-150 ease-in-out"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          <Bell className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-200">
                            {notification.message}
                          </p>
                          {notification.isNew && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="mt-1 text-xs text-blue-400 hover:text-blue-300"
                            >
                              Mark as read
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-blue-400 hover:bg-gray-700"
                    role="menuitem"
                  >
                    See all notifications
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}