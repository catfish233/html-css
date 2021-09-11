import React, { useState} from "react";
import Item from "./Item";

export default function Todolist(props){

  const [status, setStatus] = useState({flag:'All'});

  //分类显示按钮的回调函数
  function handleClick(flag){
    return()=>{
      setStatus({flag: flag})
    }
  }

  const {todos, updateTodo, editTodo, delTodo} = props;
  const {flag} = status;
  const todolist = todos.filter((todoObj)=>{return todoObj.done !== true });

  return(
    <div className="Todolist_div">
      {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} 
            editTodo={editTodo} delTodo={delTodo} 
            flag={flag}/>//遍历数组，显示Item组件的内容
          })
        }
        {
            todolist.length > 1 ?
            <p id="length">{todolist.length} items left</p>
            : <p id="length">{todolist.length} item left</p>
        }
        <button className='sort' id='All' onClick = {handleClick('All')} >All</button>
        <button className='sort' id='Active' onClick = {handleClick('Active')} >Active</button>
        <button className='sort' id='Completed' onClick = {handleClick('Completed')} >Completed</button>
    </div>
  )
}