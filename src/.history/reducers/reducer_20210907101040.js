// 设置初始todoObj
const initialState = {
  todoObj:[]
};

 const rootReducer=(state = initialState, action) => {
  switch (action.type) {

  case "send_TodoObj":
    return { ...state, ...}

  default:
    return state
  }
}

module.exports ={
  rootReducer
};