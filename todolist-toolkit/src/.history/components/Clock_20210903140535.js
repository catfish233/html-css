import React, { useEffect, useState } from "react"

function Clock(){
  const [date, setDate] = useState(new Date());

// 产生了堆栈溢出的问题
  useEffect(() =>{
    setTimeout(tick(), 1000);//递归没有限制
  });

  

  function tick(){
    setDate(new Date());
  }

  return(
    <div className = 'time'>
      Current time: {date.toLocaleString()}
    </div>
  )
}

export default  Clock;