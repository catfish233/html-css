const sendInput = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

const togglerTodos = (todos) => {
  return{
    type:"toggler_Todos",
    todos:todos,
  }
}

// 导出action
module.exports = {
  sendInput,
  togglerTodos,
};
