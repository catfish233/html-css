import React from "react";
import { clearTodo } from "../actions/action";
import '../css_style/Clear.css';
import store from "../store";

const Clear = ()=>{

  const cleartodos = (flag) =>{
    const action = clearTodo(flag);
    store.dispatch(action);
  }
  
  return(
    <button id='Clear'
    onClick = {() =>cleartodos(true)}
    >
      Clear All 
    </button>
  )
}

export default Clear;