import { createStore } from "redux";
import { rootReducer, todolistReducer } from "../reducers/reducer";

const store = createStore(rootReducer,todolistReducer);// 生成store状态树

export default store;