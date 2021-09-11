import React, { useEffect, useState } from "react"

function Clock(){
  const [date, setDate] = useState(new Date());

  useEffect(() =>{
    fn();
  });

  fn(){
    setTimeout(fn(), 1000);
    return tick();
  }

  tick(){
    setDate()
  }

  return(
    <div className = 'time'>
      Current time: {date.toLocaleString()}
    </div>
  )
    

  
}