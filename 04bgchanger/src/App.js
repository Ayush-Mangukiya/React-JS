import './App.css';
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('salmon')

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* <button className='outlinr-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => changeColor('red')}>Test 1</button>
          <button className='outlinr-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => changeColor('darkblue')}>Test 2</button> */}
          <button className='outlinr-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('red')}>Test 1</button>
          <button className='outlinr-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('darkblue')}>Test 2</button>
        </div>
      </div>
    </div>
  );
}

export default App;
