import React, { useState } from 'react';
import { sendInput } from '../actions/action';
import store from '../store';

export default function Item(props){
	
	const [status, setStatus] = useState({
		isEditing:false,
		name: props.name,
		date: props.date,
	})
	console.log('af');

  const{id, done, flag} = props;
  const time = status.date.toLocaleString();

  return (
    <li style = {{backgroundColor: '#ddd', 
										display:((flag==='Active'? done: !done)&&(flag==='All'? null: true) )?'none':'block',
								}} 
				>   

					<input type="checkbox" defaultChecked = {status.done} onChange={handleCheck(id)}/>
					<p id='Time'>{time}</p>{/* 设置为<p style={{opacity:done?'0.5':'1'}}>{time}</p>之后，复选框就不能点击 */}
					{
						status.isEditing ?
							<input className='input'
								autoFocus value={status.name}
								onKeyUp={handleEdit(id, done)}
								onBlur={handleOnblur(id, done)} 
								onChange={(e) => {
                  setStatus({name: e.target.value,})
								}}
							/> :
							<p  className='text' style={{opacity:done?'0.5':'1'}} 
								onDoubleClick={() => {
                  setStatus({isEditing: true,});  
								}}
							>
								{status.name}
							</p>
					}
					<button className="del" onClick = {delTodo(id)} style={{opacity:'1'}}>X</button>
			</li>
  )
}