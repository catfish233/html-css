import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";

// initialState作为创建Store的初始状态数据
const initialState = {
  todos: []
};

// rootReducer函数更新state
const rootReducer = (state, action) => {
  return state;
};

// 将state保存在store
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  // 使用Provider包裹App组件，确保子组件可以访问store的状态
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

