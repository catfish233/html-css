const initialState = [];

// 输入todo项
const inputReducer=(state = initialState, action) => {
  switch (action.type) {
  case "send_TodoObj":
    return [...state, action]// 将输入的内容放入state
  default:
    return state;
  }
}

module.exports ={
  inputReducer
};


