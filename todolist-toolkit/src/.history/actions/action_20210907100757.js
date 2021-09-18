const sendAction = (todoObj) => {
  return{
    type:"send_Action",
    todoObj:todoObj,
  }// 返回action
};

// 导出action
module.exports = {
  sendAction
};
