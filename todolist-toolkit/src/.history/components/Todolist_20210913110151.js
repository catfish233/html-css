import React, { useState } from "react";
import store from "../store";
import Item from "./Item";

export default function Todolist(){
  const [status, setStatus] = useState({todos:[]});

  function handleClick(flag){
    console.log("todos:",todos);
    return 
  }

  function storeChange(){
    setStatus({todos:store.getState().todoReducer});// 更新组件状态
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
        : <p id="length">{todos.length} item left</p>// 显示未完成todo项的数量
      }
      {/* 分类显示按钮 */}
      <button className='sort' id='All' onClick = {handleClick('All')} >All</button>
      <button className='sort' id='Active' onClick = {handleClick('Active')} >Active</button>
      <button className='sort' id='Completed' onClick = {handleClick('Completed')} >Completed</button>
    </div>
  )
}