import React from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import TweetBox from '@/components/TweetBox'

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-grow'>
        <Sidebar />
        <div className='w-3/4 bg-gray-100 p-4 overflow-y-scroll'>
          <TweetBox />
          <div className='mt-4'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
