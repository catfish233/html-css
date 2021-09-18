import React from "react";
import { clearTodo } from "../actions/action";
import '../css_style/Clear.css';
import store from "../store";

const Clear = ()=>{

  const clearTodo = (flag) =>{
    const action = clearTodo(flag);
    store.dispatch(action);
  }
  
  return(
    <button id='Clear'
    onClick = {() =>clearTodo(true)}
    >
      Clear All 
    </button>
  )
}

export default Clear;