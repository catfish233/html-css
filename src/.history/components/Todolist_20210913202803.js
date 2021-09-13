import React, { Component }from "react";
import store from "../store";
import Item from "./Item";

export default class Todolist extends Component{
  constructor(props){
    super(props);
    this.state = { flag:"All", todos: store.getState().todoReducer };
    store.subscribe(()=>{
      // this.setState({
      //   todos: store.getState().todoReducer
      // })
      this.state.todos =  store.getState().todoReducer
    })
  }
  
  handleClick(flag){
    return()=>{
      this.setState({flag: flag})
    }
  }

  render(){
    const {todos} = this.state;
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
          <button className='sort' id='All' onClick = {this.handleClick('All')} >All</button>
          <button className='sort' id='Active' onClick = {this.handleClick('Active')} >Active</button>
          <button className='sort' id='Completed' onClick = {this.handleClick('Completed')} >Completed</button>
        </div>
      )
  }
}