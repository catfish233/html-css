const sendInput = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

// 改变todo项状态
const togglerTodos = (id) => {
  return{
    type:"toggler_Todos",
    id:id,
  }
}

// 删除todo项
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
