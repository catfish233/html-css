const initialState = [];

// 输入todo项
const todoReducer=(state = initialState, action) => {
  switch (action.type) {

    // 将输入的内容放入state
    case "send_TodoObj":
      return [action.todoObj, ...state];

    case "toggler_Todos":
      // 改变todo项状态
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, done:!todo.done};// 状态取反
        }else {
          return todo;
        };
      })

    case "del_Todo":
      // 过滤掉与action同id的todo项，返回一个新数组
      return state.filter((todo) => {
        return todo.id !== action.id;
      })

    case "edit_Todo":
      return state.map((todo) => {
        if(todo.id === action.newtodo.id){
          return action.newtodo;
        }else {
          return todo;
        }
      })

    default:
      return state;
    }
}

// 分类
const todosFilter= (state, action) => {
  switch (action.type) {
    case "":
      return ;
    default:
      return state;
  }
}

module.exports ={
  todoReducer,
  todosFilter
};