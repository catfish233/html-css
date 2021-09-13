const initialState = [];

// 输入todo项
const inputReducer=(state = initialState, action) => {
  switch (action.type) {
  case "send_TodoObj":
    return [action.todoObj, ...state]// 将输入的内容放入state
  default:
    return state;
  }
}


let shopDetailInfo = sessionStorage.getItem('shopDetailInfo') ? JSON.parse(sessionStorage.getItem('shopDetailInfo')) : {};
let detailId = sessionStorage.getItem('detailId') ? sessionStorage.getItem('detailId') : '';
let defaultState = { shopDetailInfo, detailId};
export const homeData = (state = defaultState, action = {}) => { 
  switch (action.type) {
    case "SAVEPRODUCTDETAIL":
      sessionStorage.setItem('shopDetailInfo', JSON.stringify(action.data)); 
      return {...state, ...{shopDetailInfo: action.data}};
    case "SAVEDETAILID":
      sessionStorage.setItem('detailId', action.data); 
      return {...state, ...{detailId: action.data}};
    default: return state; }
}

module.exports ={
  inputReducer
};


