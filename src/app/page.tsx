"use client"

import React, { useState } from 'react';

const page = () => {
  const [inputVal, setInputVal] = useState("");
  const [radioVal, setRadioVal] = useState("");

  return (
    <div className='flex justify-center items-center flex-col p-24 '>
      <h1 className='text-2xl font-extrabold text-blue-600'>On Change Handling</h1>
      <br />
      <input 
      type="text"
      value={inputVal} 
      placeholder='Type Something Here' 
      className='text-black bg-slate-300' 
      onChange={(e) => setInputVal(e.target.value)}
      />
      <br />

      <label>
        <input type="radio" value={"Ji Haan"} name='ji' 
        onChange={(e) => setRadioVal(e.target.value)}/> Yes
      </label>
      <label>
        <input type="radio" value={"Ji Nahi"} name='ji'
         onChange={(e) => setRadioVal(e.target.value)}/> No
      </label>
      <br />
      <p className='text-1xl font-mono text-orange-300'>{inputVal} {radioVal}</p>
    </div>
  )
}

export default page