import React, {useEffect} from 'react';
// import s from '../styles/Tweet.scss'
// import '../styles/Tweet.scss'
import styled from 'styled-components'

function Tweet({ name, tweet, setTweets, tweets}) {
    // Before UUID
    // const deleteTweet = () => {
    //   console.log(tweet);
    //   console.log(tweets);
    //   setTweets(tweets.filter((t) => t !== tweet));
    // }    

    const deleteTweet = () => {
      console.log(tweet);
      console.log(tweet.id);
      console.log(tweets);
      setTweets(tweets.filter((t) => t.id !== tweet.id));
    }    

    useEffect(() => {
      console.log("we run a function tweet");
    }, [])

  return (
    // <div className='tweet'> 
    // {/*<div className={s.tweet}>  */}
    //     {/* <h2 className={s.title}>Name {name}</h2> */}
    //     <h2>Name {name}</h2>
    //     <h3>{ tweet.message }</h3>
    //     <button onClick={deleteTweet}>Delete</button>
    //     <button>Like</button>
    // </div>

    <TweetStyle> 
    {/*<div className={s.tweet}>  */}
        {/* <h2 className={s.title}>Name {name}</h2> */}
        <h2>Name {name}</h2>
        <h3>{ tweet.message }</h3>
        <button onClick={deleteTweet}>Delete</button>
        <button>Like</button>
    </TweetStyle>
  );
}

const TweetStyle = styled.div`
  background-color : "red";
  border : 3px solid black;
`

export default Tweet