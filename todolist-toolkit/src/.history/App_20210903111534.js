import { Component } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import Input from './components/Input';
import Todolist from './components/Todolist';
import Sitefoot from './components/Sitefoot';
import Clear from './components/Clear';

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