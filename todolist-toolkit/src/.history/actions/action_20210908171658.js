const sendAction = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

const  addTodo = (todoObj) => {
  return{
    type:"add_Todo",
    todoObj:todoObj,
  }
}

// 导出action
module.exports = {
  sendAction, addTodo
};
