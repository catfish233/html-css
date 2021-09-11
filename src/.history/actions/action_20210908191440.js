const sendAction = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

const  addTodo = (todos) => {
  return{
    type:"add_Todo",
    todos:todos,
  }
}

// 导出action
module.exports = {
  sendAction, addTodo
};
