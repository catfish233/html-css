import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Clock from './Clock';

export default function Input(){

  return (
    <div>
      <label>Todolist </label>
      <input onKeyUp = {this.handleKeyUp} type="text" //绑定input元素
            placeholder="What needs to be done?"
            autoComplete="off" 
      />
      <Clock />
    </div>
  )
  
}