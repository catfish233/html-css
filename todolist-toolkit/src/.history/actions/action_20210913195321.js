const sendInput = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

// 
const togglerTodos = (todos) => {
  return{
    type:"toggler_Todos",
    todos:todos,
  }
}

// 删除todo项
const delTodo = (id, todos) => {
  return{
    type:"del_Todo",
    todos:todos,
    id:id,
  }
}

// 导出action
module.exports = {
  sendInput,
  togglerTodos,
  delTodo,
};
