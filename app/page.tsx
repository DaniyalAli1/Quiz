import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import image1 from '../lib/assets/twitter-logo.png';
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-500'>
        <div className='flex flex-col items-center'>
          
            <Image src={image1}alt="Twitter logo" className='mb-4' />
            <Button asChild>
              <Link href="/dashboard">
              Go to Dashboard
              </Link>
            </Button>
        </div>
    </div>
  )
}

export default page
