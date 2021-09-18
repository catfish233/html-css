const initialState = { };

// 输入todo项
const rootReducer=(state = initialState, action) => {
  switch (action.type) {
  case "send_TodoObj":
    return Object.assign({}, state, action.todoObj);// 将输入的内容放入state
  default:
    return state;
  }
}

const initialTodos = [ ];

// 将合并后的todo对象数组保存
const todolistReducer = (state = initialTodos,action) =>{
  switch (action.type) {
    case "add_Todo":
      return ;
    default:
      return state;
  }
}

module.exports ={
  rootReducer,
  todolistReducer,
};
