import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { sendAction } from '../actions/action';
import store from '../store'
import Clock from './Clock';

export default function Input(){

  const [input, setInput] = useState('');

  function handleKeyUp(event){
    const {keyCode, target} = event;
    setInput(target.value);
    if(keyCode !== 13) return ; //当点击回车时才会传送value
    if(input.trim() === ''){
      alert('The input cannot be empty!');
      return;
    }
    const todoObj = { id:nanoid(), name:input, 
      done: false, date: new Date().toLocaleString()
    };//预处理，将输入封装为一个对象

    const action = sendAction(todoObj);
    store.dispatch(action);

    console.log(todoObj);
    target.value = "";
  }

  useEffect(
    store.subcribe(() => {
      console.log("subcribe:", store.getstate());
			setInput();
    })
  )
  
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