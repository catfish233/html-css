import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //输入todo项
    sendtodo: (state, action) =>{
      state.push(action.todoObj);
    },
    
    //改变todo项状态
    togglertodo: (state, action) =>{
      if
    }


  }
})