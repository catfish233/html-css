import React, { useState } from 'react';
import { delTodo, } from '../actions/action';

export default function Item(props){

	function handleDel
	
	const [status, setStatus] = useState({
		isEditing:false,
		name: props.name,
		date: props.date,
		id: props.id,
		done: props.done,
	})

  const time = status.date.toLocaleString();

  return (
    <li>   
					<input type="checkbox" defaultChecked = {status.done} />
					<p id='Time'>{time}</p>{/* 设置为<p style={{opacity:done?'0.5':'1'}}>{time}</p>之后，复选框就不能点击 */}
					{
						status.isEditing ?
							<input className='input'
								autoFocus value={status.name}
								onChange={(e) => {
                  setStatus({name: e.target.value,})
								}}
							/> :
							<p  className='text' style={{opacity:'1'}} 
								onDoubleClick={() => {
                  setStatus({isEditing: true,});  
								}}
							>
								{status.name}
							</p>
					}
					<button className="del" onclick={handleDel(id)} style={{opacity:'1'}}>X</button>
			</li>
  )
}