'use client';

import React, { useState } from 'react'

const TweetBox = () => {
  const [tweet, setTweet] = useState('')

  const handleTweet = () => {
    // Handle tweet submission logic
    console.log(tweet)
    setTweet('')
  }

  return (
    <div className='p-4 bg-white border-b'>
      <textarea 
        className='w-full border p-2 rounded' 
        placeholder='What’s happening?' 
        value={tweet} 
        onChange={(e) => setTweet(e.target.value)} 
      />
      <button onClick={handleTweet} className='bg-blue-500 text-white px-4 py-2 rounded mt-2'>
        Tweet
      </button>
    </div>
  )
}

export default TweetBox
