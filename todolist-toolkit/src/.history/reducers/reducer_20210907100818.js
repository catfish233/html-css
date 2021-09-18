// 设置初始todoObj
const initialState = {
  todoObj:[]
};

 const rootReducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case "send_TodoObj":
    return { ...state, ...payload }

  default:
    return state
  }
}

module.exports ={
  rootReducer
};