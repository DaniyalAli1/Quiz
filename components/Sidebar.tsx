import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-1/4 bg-gray-100 h-screen p-4'>
      <ul className='space-y-4'>
        <li><button className='text-blue-500'>Home</button></li>
        <li><button className='text-blue-500'>Explore</button></li>
        <li><button className='text-blue-500'>Notifications</button></li>
        <li><button className='text-blue-500'>Messages</button></li>
      </ul>
    </div>
  )
}

export default Sidebar
