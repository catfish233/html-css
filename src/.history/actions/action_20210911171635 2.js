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

const delTodo = (id) => {
  return{
    type:"del_Todo",
    id:id,
  }
}

// 导出action
module.exports = {
  sendInput,
  togglerTodos,
  delTodo,
};
