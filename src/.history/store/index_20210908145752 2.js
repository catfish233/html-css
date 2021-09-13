import { createStore } from "redux";
import { rootReducer } from "../reducers/reducer";

const store = createStore(rootReducer);// 生成store状态树

export default store;