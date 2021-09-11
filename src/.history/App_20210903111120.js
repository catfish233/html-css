import { Component } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
          <Input addtodo = {this.addtodo} />
          <Todolist 
            todos={todos} 
            updateTodo={this.updateTodo} 
            editTodo={this.editTodo} 
            delTodo={this.delTodo}/>
          <Clear clearTodo={this.clearTodo} todos={todos}/>
          <Sitefoot />
      </div>
  )
}