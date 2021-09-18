import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";

const sendAction = (todoObj) => {
  return{
    type:"send_action",
    todoObj:todoObj,
  }// 返回action
};

// 导出action
module.exports = {
  sendAction
};
