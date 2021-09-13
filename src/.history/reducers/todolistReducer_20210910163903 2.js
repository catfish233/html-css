const initialTodos = {
  todos: [],
  text:"sfd",
}

// 将合并后的todo对象数组保存
const todolistReducer = (state = initialTodos,action) =>{
  switch (action.type) {
    case "add_Todo":
      
      console.log(state);
      const oldstate = {...state, todos:action.todos};
      console.log(oldstate);
      return {...state, todos:oldstate};
      // 如何添加一个todos,而不是覆盖前一个？
    default:
      return state;
  }
}

module.exports ={
  todolistReducer
};