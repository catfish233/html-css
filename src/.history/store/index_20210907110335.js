import { createStore } from "redux";
import { rootReducer } from "../reducers/reducer";

const store = createStore({reducer: rootReducer()});

export default store;