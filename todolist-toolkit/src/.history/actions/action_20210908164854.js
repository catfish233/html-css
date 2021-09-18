const sendAction = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

const  addTodo = (todoObj) => {
  return{
    type:""
  }
}

// 导出action
module.exports = {
  sendAction
};
