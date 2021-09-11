import React, { useState } from 'react';
import { sendInput } from '../actions/action';
import store from '../store';

export default function Item(props){
	
	const [status, setStatus] = useState({
		mouse:false, 
		isEditing:false,
		name: props.name,
		date: props.date,
	})
	
	//鼠标移入移出的回调函数
	function handleMouse (flag){
		return  {mouse: flag}
	}

	//修改后将状态传递回App，并修改isEditing为false
	function handleEdit(id, done){
		return (event) =>{
			const {keyCode, target} = event;
			const date = new Date().toLocaleString();
			if(keyCode !== 13) return;
			else{
				if(target.value === '') return alert('The input cannot be empty!');
				const newtodo = {id:id, name:target.value, done:done, date:date};//预处理，将输入封装为一个对象
				const action = sendInput(newtodo);// 更新todolist
				store.dispatch(action);

				setStatus({
					isEditing: false,
					date: date,
				});
			}
		}
	}

  

  const{id, done, flag} = props;
  const time = status.date.toLocaleString();

  return (
    <li style = {{backgroundColor:status.mouse ? '#ddd' : 'rgb(235, 232, 219)', 
										display:((flag==='Active'? done: !done)&&(flag==='All'? null: true) )?'none':'block',
								}} 
				onMouseEnter={handleMouse(true)} 
				onMouseLeave={handleMouse(false)}>  {/* 鼠标移入Item项高亮显示，移出恢复 */}
						
					<input type="checkbox" defaultChecked = {status.done} onChange={this.handleCheck(id)}/>
					<p id='Time'>{time}</p>{/* 设置为<p style={{opacity:done?'0.5':'1'}}>{time}</p>之后，复选框就不能点击 */}
					{
						status.isEditing ?
							<input className='input'
								autoFocus value={status.name}
								onKeyUp={handleEdit(id, done)}
								onBlur={this.handleOnblur(id, done)} 
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
					<button className="del" onClick = {this.delTodo(id)} style={{opacity:status.mouse?'1':'0'}}>X</button>
			</li>
  )
}