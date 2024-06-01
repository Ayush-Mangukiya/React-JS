import React from 'react';
import Tweet from './Tweet';

function TweetList({name, message, tweets, setTweets }) {
  return (
    <div className='tweet-list'>
        {/* <Tweet name={name} message={message} tweets={tweets[0]} />
        <Tweet name={name} message={message} />
        <Tweet name={name} message={message} /> */}
        {/* { tweets.map((tweet) => <Tweet name={name} tweet={tweet} setTweets={setTweets} tweets={tweets} /> // Intially before UUID */}
        {/* But now tweet is an object si we can't pass it directly to Tweet */}
        { tweets.map((tweet) => <Tweet 
                                  name={ name } 
                                  tweet={ tweet } 
                                  setTweets={ setTweets } 
                                  tweets={ tweets }
                                  key={ tweet.id } />  // Warning: Each child in a list should have a unique “key” prop.
        ) }

    </div>
  )
}

export default TweetList