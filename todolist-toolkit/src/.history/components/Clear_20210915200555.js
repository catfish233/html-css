import React from "react";
import { clearTodo } from "../actions/action";
import '../css_style/Clear.css';
import store from "../store";

const Clear = ()=>{

  const cleartodos = () =>{
    const action = clearTodo();
    store.dispatch(action);
  }
  
  return(
    <button id='Clear'
    onClick = {() =>cleartodos()}
    >
      Clear All 
    </button>
  )
}

export default Clear;