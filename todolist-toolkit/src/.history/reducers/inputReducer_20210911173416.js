const initialState = [];

// 输入todo项
const inputReducer=(state = initialState, action) => {
  switch (action.type) {
  case "send_TodoObj":
    return [action.todoObj, ...state]// 将输入的内容放入state
  case "toggler_Todos":
    return state.map((todo) =>{
      if (todo.id === action.id) {
        return {...todo, done:todo.done};
      }else {
        return todo;
      }
    })
  case ""
  default:
    return state;
  }
}

module.exports ={
  inputReducer
};


