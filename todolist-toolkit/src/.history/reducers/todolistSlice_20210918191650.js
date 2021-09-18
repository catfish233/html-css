import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todolistSlice = createSlice({
  name:'todos',// action的type前缀
  initialState,// state初始值
  reducers: {
    //输入todo项
    sendtodo: (state, action) =>{
      state.push(action.payload);// 可以直接更改state
    },
    
    //改变todo项状态
    togglertodo: (state, action) =>{
      state.map((todo) => {
        if (todo.id === action.payload.id) {
           return {...todo, done:!todo.done};// 状态取反
        }else {
          return todo;
        };
      })
    },

    // 过滤掉与action同id的todo项，返回一个新数组
    deltodo: (state, action) =>{
      // state = state.filter((todo) => {
      //   return todo.id !== action.payload.id;
      // })
      console.log(233)
      console.log(state);
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    //编辑todo项
    edittodo: (state, action) =>{
      state.map((todo) => {
        if(todo.id === action.payload.id){// !!!
          return action.payload;
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

// 导出action
export const { sendtodo, togglertodo, deltodo, edittodo, cleartodo } = todolistSlice.actions;

// 导出reducer
export default todolistSlice.reducer;