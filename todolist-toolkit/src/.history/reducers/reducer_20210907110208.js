// 设置初始todoObj
const initialState = {
  todoObj:[]
};

 const rootReducer=(state = initialState, action) => {
  switch ("send_TodoObj") {
  case "send_TodoObj":
    return Object.assign({}, state, action);
    // 将action和stete合并，相同的,action中的子属性被state替换，放在{}中
  default:
    return state
  }
}

module.exports ={
  rootReducer
};