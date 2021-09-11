const rootReducer=(state, action) => {
  switch (action) {
  case "send_TodoObj":
    console.log("action:", action);
    console.log("Object:", Object.assign({}, state, action));
    return Object.assign({}, state, action);
    // 将action和stete合并，相同的,action中的子属性被state替换，放在{}中
  default:
    return state
  }
}

module.exports ={
  rootReducer
};