import React, { useState } from "react";
import store from "../store";
import Item from "./Item";

export default function Todolist(){

  const [status, setStatus] = useState({flag:'All'},{todos:[]});

  //分类显示按钮的回调函数
  function handleClick(flag){
    return()=>{
      setStatus({flag: flag})// 要将这里用redux的数据保存替换
    }
  }

  function storeChange(){
    setStatus(...status,{todos:store.getState().inputReducer});
    // console.log(store.getState().inputReducer);
  }

  const {flag} = status;
  console.log(status);
  const todos = store.getState().inputReducer;// 获取输入todos对象数组
  // setStatus({todos:todos})
  store.subscribe(storeChange);
  

  return(
    <div className="Todolist_div">
      {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo}
            flag={flag}/>//遍历数组，显示Item组件的内容
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