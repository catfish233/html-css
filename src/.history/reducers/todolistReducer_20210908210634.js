const initialTodos = {
  todos: []
};

// 将合并后的todo对象数组保存
const todolistReducer = (state = initialTodos,action) =>{
  switch (action.type) {
    case "add_Todo":
      console.log(typeof(state))
      return state.todos.push(action.todos);
    default:
      return state;
  }
}

module.exports ={
  todolistReducer
};