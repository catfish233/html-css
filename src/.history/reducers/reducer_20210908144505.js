const initialState = {
  todos:[]
}

const rootReducer=(state = initialState, action) => {
  switch (action.type) {
  case "send_TodoObj":
    console.log(action.todoObj)
    return Object.assign({}, state, action.todoObj);
    // return [...state.todos, action.todoObj];
    // 将action和stete合并，相同的,action中的子属性被state替换，放在{}中
  default:
    return state
  }
}

module.exports ={
  rootReducer
};