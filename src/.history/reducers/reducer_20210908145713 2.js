const initialState = { }

const rootReducer=(state = initialState, action) => {
  switch (action.type) {
  case "send_TodoObj":
    return Object.assign({}, state, action.todoObj);// 将输入的内容放入state
  default:
    return state
  }
}

module.exports ={
  rootReducer
};