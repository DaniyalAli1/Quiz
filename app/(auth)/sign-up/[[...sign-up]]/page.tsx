import React from 'react'
import { SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <SignUp path='sign-up'/>
    </div>
  )
}

export default page