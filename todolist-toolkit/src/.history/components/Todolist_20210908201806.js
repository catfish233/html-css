import React, { useState } from "react";
import { useSelector } from "react-redux";
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

  
  const input = store.getState();// 获取输入todoObj，一个对象
  console.log(input);
  const action = addTodo(input);
  // const action = {type: "add_Todo", todos:input};
  store.dispatch(action);
  console.log(action);

  const selecTodos = state => state.todos;// state从哪里来？？？
  const todos = useSelector(selecTodos)// 获取合并后的对象数组
  console.log(todos);

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