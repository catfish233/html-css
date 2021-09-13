const { default: Todolist } = require("../components/Todolist");

const sendInput = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

const toggler = (Todolist) => {
  return{
    type:"toggler_Todos",
    todos
  }
}

// 导出action
module.exports = {
  sendInput,
};
