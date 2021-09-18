import React from "react";
import 
import '../css_style/Clear.css';

const Clear = ()=>{

  const clearTodo = (flag) =>{
    const action = 
  }
  
  return(
    <button id='Clear'
    onClick = {clearTodo(true)}
    >
      Clear All 
    </button>
  )
}