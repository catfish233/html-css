const initialTodos = []

// 将合并后的todo对象数组保存
const todolistReducer = (state = initialTodos,action) =>{
  switch (action.type) {
    case "add_Todo":
      return {...state, todos:action.todos};
    default:
      return state;
  }
}

module.exports ={
  todolistReducer
};