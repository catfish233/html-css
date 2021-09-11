import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  todos: []
};

const rootReducer = (state, action) => {
  return state;
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

