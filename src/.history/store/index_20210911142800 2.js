import { createStore } from "redux";
import combineReducers from "../reducers/index";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergelevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateRecomciler: autoMergelevel2,
}

const myPersisdd = persistReducer(persistConfig, combineReducers);

const store = createStore(myPersisdd);// 生成store状态树

export const persistor = persistStore;
export default store;