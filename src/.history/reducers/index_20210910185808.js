import { combineReducers } from "redux";
import {inputReducer} from "./inputReducer";
import {todolistReducer} from "./todolistReducer";

export default combineReducers({
  inputReducer,
  todolistReducer,
})//合并reducer