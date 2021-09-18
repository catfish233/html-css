import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todolistSlice = createSlice({
  name:'todos',
  initialState,
  reducers: {
    //输入todo项
    sendtodo: (state, action) =>{
      state.push(action.todoObj);// 可以直接更改state
    },
    
    //改变todo项状态
    togglertodo: (state, action) =>{
      state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, done:!todo.done};// 状态取反
        }else {
          return todo;
        };
      })
    },

    // 过滤掉与action同id的todo项，返回一个新数组
    deltodo: (state, action) =>{
      state.filter((todo) => {
        return todo.id !== action.id;
      })
    },

    //编辑todo项
    edittodo: (state, action) =>{
      state.map((todo) => {
        if(todo.id === action.newtodo.id){
          return action.newtodo;
        }else {
          return todo;
        };
      })
    },

    // 清空所有todo项
    cleartodo: (state) =>{
      state = [];
    }
  }
})

export const { sendtodo, togglertodo, deltodo, edittodo, cleartodo } = todolistSlice.actions;
export default todolistSlice.reducer;