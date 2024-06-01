import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// import { useState } from 'react';

function CreateTweet({ textInput, setTextInput, tweets, setTweets } ) {

  // const [textInput, setTextInput] = useState("");
  // const [tweets, setTweets] = useState([]);

  const userInputHandler = (e) => {
    console.log(e.target.value);
    setTextInput(e.target.value);
  } 

  const submitTweetHandler = (e) => {
    e.preventDefault();
    console.log("Hey!");
    // setTweets([...tweets, textInput]); // Initially before UUID
    setTweets([...tweets, {message : textInput, id : uuidv4()}]);
    setTextInput("");
  }

  return (
    <form onSubmit={submitTweetHandler}>
        <textarea value={textInput} onChange={userInputHandler} cols="10" rows="10"></textarea>  
        <button>Submit</button>
        <h1 onClick={() => setTextInput("")}>{textInput}</h1>
    </form>
  );
}

export default CreateTweet