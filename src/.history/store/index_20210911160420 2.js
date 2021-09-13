import { createStore } from "redux";
import combineReducers from "../reducers/index";

const store = createStore(combineReducers);// 生成store状态树

export default store;