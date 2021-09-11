import React, { useState} from "react";
import store from "../store";
import { addTodo } from '../actions/action';
import Item from "./Item";

export default function Todolist(){

  const [status, setStatus] = useState({flag:'All'});

  //分类显示按钮的回调函数
  function handleClick(flag){
    return()=>{
      setStatus({flag: flag})
    }
  }

  const action = 

  const initialTodos = {};
  const input = store.getState();// 获取输入todoObj，一个对象
  const todos = [initialTodos, input];
  console.log(todos);
  console.log(typeof(input))

  const {flag} = status;
  // const todolist = todos.filter((todoObj)=>{return todoObj.done !== true });

  return(
    <div className="Todolist_div">
      {
          // todos.map((todo) => {
          //   return <Item key={todo.id} {...todo} 
          //   flag={flag}/>//遍历数组，显示Item组件的内容
          // })
        }
        {
            // todolist.length > 1 ?
            // <p id="length">{todolist.length} items left</p>
            // : <p id="length">{todolist.length} item left</p>
        }
        <button className='sort' id='All' onClick = {handleClick('All')} >All</button>
        <button className='sort' id='Active' onClick = {handleClick('Active')} >Active</button>
        <button className='sort' id='Completed' onClick = {handleClick('Completed')} >Completed</button>
    </div>
  )
}