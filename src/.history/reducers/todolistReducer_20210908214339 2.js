const initialTodos = {
  todos: []
}

// 将合并后的todo对象数组保存
const todolistReducer = (state = initialTodos,action) =>{
  switch (action.type) {
    case "add_Todo":
      return {todos:{...state, todos:action.todos}};
      // 如何添加一个todos,而不是覆盖前一个？
    default:
      return state;
  }
}

module.exports ={
  todolistReducer
};