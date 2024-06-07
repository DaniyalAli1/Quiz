'use client';

import React, { useState } from 'react';

const TweetBox = () => {
  const [tweet, setTweet] = useState<string>('');
  const [tweets, setTweets] = useState<string[]>([]);

  const handleTweet = () => {
    // Add the tweet to the tweets array
    setTweets(prevTweets => [...prevTweets, tweet]);

    // Clear the tweet text box
    setTweet('');
  }

  return (
    <div>
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
      {/* Display previously submitted tweets */}
      <div className="mt-4">
        {tweets.map((tweet, index) => (
          <div key={index} className="p-4 bg-white border-b">{tweet}</div>
        ))}
      </div>
    </div>
  );
}

export default TweetBox;
