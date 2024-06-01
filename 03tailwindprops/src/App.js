import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  let myArr = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="App">
        <h1 className='text-3xl bg-green-500 p-3 rounded-md'>CRA with Tailwind</h1>
        <Card username="messi" array = {myArr} />  {/* array = {[1, 2, 3, 4, 5, 6, 7, 8]} */}
        <Card username="messi" post = "Center Forward"/>
        <Card />
    </div>
  );
}

export default App;
