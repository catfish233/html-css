const sendInput = (todoObj) => {
  return{
    type:"send_TodoObj",
    todoObj:todoObj,
  }// 返回action
};

// 导出action
module.exports = {
  sendInput,
};
