const initialTodos = [];

const addTodo = (state, action) =>{
  switch(action.type) {
    case "add_Todo":
      return action.todos;
    default:
      return state;
  }
}

// 将合并后的todo对象数组保存
const todolistReducer = (state = initialTodos,action) =>{
  switch (action.type) {
    case "add_Todo":
      return [...state, addTodo(undefined,action)];
      // 如何添加一个todos,而不是覆盖前一个？
    default:
      return state;
  }
}


module.exports ={
  todolistReducer
};