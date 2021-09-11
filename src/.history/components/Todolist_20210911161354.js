import React, { useState } from "react";
import store from "../store";
import Item from "./Item";

export default function Todolist(){

  const 
  const [status, setStatus] = useState({todos:[]});

  function handleClick(flag){
    return 
  }

  function storeChange(){
    setStatus({todos:store.getState().inputReducer});// 更新组件状态
    localStorage.setItem("localdata", JSON.stringify(status));
  }

  store.subscribe(storeChange);// 监听store数据变化，数据发生变化组件随之改变
  const todos = status.todos;

  return(
    <div className="Todolist_div">
      {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo}
            />//遍历数组，显示Item组件的内容
          })
        }
        {
            todos.length > 1 ?
            <p id="length">{todos.length} items left</p>
            : <p id="length">{todos.length} item left</p>
        }
        <button className='sort' id='All' onClick = {handleClick('All')} >All</button>
        <button className='sort' id='Active' onClick = {handleClick('Active')} >Active</button>
        <button className='sort' id='Completed' onClick = {handleClick('Completed')} >Completed</button>
    </div>
  )
}