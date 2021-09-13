const initialState = [];

const localdata = () =>{
  try {
    const serializedState = localStorage.getItem('localdata');
    if (serializedState === null) {
      return initialState;
    }
    else {
      return JSON.parse(serializedState);
    } 
  } catch (err){
    return initialState;
  }
}
// 输入todo项
const todoReducer=(state = localdata(), action) => {
  switch (action.type) {

    // 将输入的内容放入state
    case "send_TodoObj":
      console.log(state);
      return //[action.todoObj, ...state]

    case "toggler_Todos":
      // 改变todo项状态
      return state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, done:!todo.done};
        }else {
          return todo;
        }
      })

    case "del_Todo":
      // 过滤掉与action同id的todo项，返回一个新数组
      return state.todos.filter((todo) => {
        return todo.id !== action.id;
      })

    default:
      return state;
    }
}

module.exports ={
  todoReducer,
};


