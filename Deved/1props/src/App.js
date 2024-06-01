// import s from './styles/App.module.css'
import TweetList from './Components/TweetList';
import CreateTweet from './Components/CreateTweet';
import { useState, useEffect } from 'react';

function App() {

  // const name = "Ayush Mangukiya";
  const message = "Hello";

  const [name, setName] = useState("Ayush Mangukiya")

  // const sayHelloHandler = (user) => {
  //   console.log(`Hello ${user}`);
  // }

  const sayHelloHandler = (e) => {
    console.log(e);
    setName("Lionel Messi")//name = "Lionel Messi"
  }

  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("we run a function app");
  }, [tweets, textInput])

  return (
    <div className="App">
      <h1 className="title">Twitter Lite</h1>
      {/* <h1 className={s.title}>Twitter Lite</h1> */}
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList name={name} message={message} tweets={tweets} setTweets={setTweets} /> 

      {/* make a arrow function in order to stop implicit invocation due to passing params, it's not required if we're giving only reference 
          onClick={sayHelloHandler}
          <button onClick={sayHelloHandler("Mike")}>Click</button>
           */}
      <h1>Hello {name} </h1>
      <button onClick={sayHelloHandler}>Click</button> 

    </div>
  );
}

export default App;
