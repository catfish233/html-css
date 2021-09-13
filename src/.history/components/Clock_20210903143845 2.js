import React, { useEffect, useState } from "react"

function Clock(){
  const [date, setDate] = useState(new Date());

  // 不用使用链式setTimeout
  useEffect(() =>{
    setTimeout(()=>tick(), 1000);
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