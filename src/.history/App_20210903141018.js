import { useState, useEffect } from 'react';
import Clock from './components/Clock';

function App(){
  // 声明state和更新state的函数
  const [todos, setTodos] = useState([]);

  // 副作用hook将数据保存在本地，每次渲染后都会执行
  useEffect(() => {
    localStorage.setItem('localdata', JSON.stringify(todos))
  })

  return (
    <div className="App">
      <Clock />
    </div>
  )
}

export default App;