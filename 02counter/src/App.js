// 1. Triggering a render (delivering the guest’s order to the kitchen)
// 2. Rendering the component (preparing the order in the kitchen)
// 3. Committing to the DOM (placing the order on the table)
// https://react.dev/learn/render-and-commit
import './App.css';

// Local variables don’t persist between renders. When React renders this component a second time, 
// it renders it from scratch—it doesn’t consider any changes to the local variables.

// Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the 
// component again with the new data.

// To update a component with new data, two things need to happen:

// 1. Retain the data between renders.
// 2. Trigger React to render the component with new data (re-rendering).

// The useState Hook provides those two things:

// 1. A state variable to retain the data between renders.
// 2. A state setter function to update the variable and trigger React to render the component again.

// When you call useState, you are telling React that you want this component to remember something.
import { useState } from 'react'

function App() {

  // Every time your component renders, useState gives you an array containing two values:

  // The state variable (counter) with the value you stored.
  // The state setter function (setcounter) which can update the state variable and trigger React to 
  // render the component again.
  const [counter, setCounter] = useState(18)

//   Your component renders the first time. Because you passed 0 to useState as the initial value 
//   for counter, it will return [0, setcounter]. React remembers 0 is the latest state value.

//You update the state. When a user clicks the button, it calls setcounter(counter + 1). counter is 0, 
// so it’s setcounter(1). This tells React to remember counter is 1 now and triggers another render.

// Your component’s second render. React still sees useState(0), but because React remembers that 
// you set counter to 1, it returns [1, setcounter] instead.
  
  // let counter = 18

  // function increaseValue() {
  //   counter = counter + 1
  //   console.log(counter)
  // }
 
  // function decreaseValue() {
  //   counter = counter - 1
  //   console.log(counter)
  // }

  // function increaseValue() {
  //   setCounter(counter+1)
  // }
  
  // Multiple call - Use Callback
  // (prevCounter) => prevCounter+1 -> Updater Function
  function increaseValue() {
    setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  setCounter((prevCounter) => prevCounter+1)
  }

  function decreaseValue() {
    setCounter(counter-1)
  }

  function stateQueue() {
    setCounter(counter+5)
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div className="App">
      <h1> React JS</h1>
      <h1> counter value : { counter } </h1>
      <button onClick={increaseValue} > Add Value </button>
      <button onClick={decreaseValue}> Remove Value </button>
      <button onClick={stateQueue}> State Queue </button>
      <h3> footer : { counter } </h3>
    </div>
  );
}

export default App;

// State is isolated and private 
// State is local to a component instance on the screen. In other words, if you render the same 
// component twice, each copy will have completely isolated state! Changing one of them will not 
// affect the other