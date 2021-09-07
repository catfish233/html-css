const initialState = {
  todos:[]
}

const rootReducer=(state = initialState, action) => {
  switch (action.type) {
  case "send_TodoObj":
    console.log("state1:", state);
    console.log("Object:", Object.assign({},action , state));
    return Object.assign({}, state, action);
    // 将action和stete合并，相同的,action中的子属性被state替换，放在{}中
  default:
    return state
  }
}

module.exports ={
  rootReducer
};