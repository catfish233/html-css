import React, { useEffect, useState } from "react"

function Clock(){
  const [date, setDate] = useState(new Date());

// 产生了堆栈溢出的问题
  useEffect(() =>{
    fn();
  });

  function fn(){
    tick();
    setTimeout(fn(), 1000);
  }

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