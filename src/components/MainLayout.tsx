import React from 'react'
import Header from './LandingPageFeed/Header'

const MainLayout = ({children, toggleLeftSidebar, toggleRightSidebar}: {children: React.ReactNode, toggleLeftSidebar: () => void, toggleRightSidebar: () => void}) => {
  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-primary text-white min-h-screen">
        <Header toggleLeftSidebar={toggleLeftSidebar} toggleRightSidebar={toggleRightSidebar}/>
        {children}
    </div>
  )
}

export default MainLayout