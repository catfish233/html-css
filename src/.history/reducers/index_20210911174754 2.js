import { combineReducers } from "redux";
import {todoReducer} from "./inputReducer";

export default combineReducers({
  todoReducer,
})//合并reducer