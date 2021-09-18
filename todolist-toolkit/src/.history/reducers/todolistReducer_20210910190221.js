// 将合并后的todo对象数组保存
const todolistReducer = (state = [],action) =>{
  switch (action.type) {
    case "add_Todo":
      return [...state,{
        id: action.id,
        name: action.name,
        
      }]
      // 如何添加一个todos,而不是覆盖前一个？
    default:
      return state;
  }
}


module.exports ={
  todolistReducer
};