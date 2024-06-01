import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false) 
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  // useCALLBACK() Memorizes function as much as possible 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+{}[]~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasstoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // passwordGenerator() This will lead to infinire re-renders, react won't allow it.
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-400 text-black">

      <h1 className='text-white text-center my-3'> Password Generator </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
          type='text' 
          value={password} 
          className='outline-non w-full py-1 px-3' 
          placeholder='Password' 
          readOnly  
          ref={passwordRef}
        />

        <button 
          className='outline-none bg-blue-950 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasstoClipboard}>
          copy
        </button>

      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>

          <input 
            type='range' 
            min={6} 
            max={20} 
            value={length} 
            className='cursor-pointer'
            onChange = {(e) => {setLength(e.target.value)}}
          />
          
          <label htmlFor='length'>Length: {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>

          <input  
            type='checkbox'
            defaultChecked={numAllowed}
            id='="numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />

          <label htmlFor='number'>Number</label>
        </div>

        
        <div className='flex items-center gap-x-1'>

          <input  
            type='checkbox'
            defaultChecked={numAllowed}
            id='="charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />

          <label htmlFor='character'>Character</label>

        </div>
      </div>
    </div>
  );
}

export default App;

