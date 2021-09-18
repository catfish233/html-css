import React from "react";
import { clearTodo } from "../actions/action";
import '../css_style/Clear.css';

const Clear = ()=>{

  const clearTodo = (flag) =>{
    const action = clearTodo(flag);
  }
  
  return(
    <button id='Clear'
    onClick = {clearTodo(true)}
    >
      Clear All 
    </button>
  )
}