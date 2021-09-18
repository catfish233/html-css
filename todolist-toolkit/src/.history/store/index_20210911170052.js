import { createStore } from "redux";
import combineReducers from "../reducers/index";

const localdata = () =>{
  try {
    const serializedState = localStorage.getItem('localdata');
    if (serializedState === null) {
      return undefined;
    }
    else {
      return JSON.parse(serializedState);
    } 
  } catch (err){
    return undefined;
  }
}

const store = createStore(combineReducers, localdata());// 生成store状态树

export default store;