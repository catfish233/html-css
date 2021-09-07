import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Clock from './Clock';

export default function Input(){

  const [input, setInput] = useState('');

  function handleKeyUp(event){
    const {keyCode, target} = event;
    setInput(target.value);
    console.log(input);

  }
  

  return (
    <div>
      <label>Todolist </label>
      <input onKeyUp = {handleKeyUp} type="text" //绑定input元素
            placeholder="What needs to be done?"
            autoComplete="off" 
      />
      <Clock />
    </div>
  )
}