import React, { useState } from 'react';

export default function Item(props){

  const [status, setStatus] = useState({
    mouse:false, 
    isEditing:false,
    name: props.name,
    date: props.date,
  })

  return (
    <li style = {{backgroundColor:status.mouse ? '#ddd' : 'rgb(235, 232, 219)', 
										display:((flag==='Active'? done: !done)&&(flag==='All'? null: true) )?'none':'block',
								}} 
				onMouseEnter={this.handleMouse(true)} 
				onMouseLeave={this.handleMouse(false)}>  {/* 鼠标移入Item项高亮显示，移出恢复 */}
						
					<input type="checkbox" defaultChecked = {status.done} onChange={this.handleCheck(id)}/>
					<p id='Time'>{time}</p>{/* 设置为<p style={{opacity:done?'0.5':'1'}}>{time}</p>之后，复选框就不能点击 */}
					{
						status.isEditing ?
							<input className='input'
								autoFocus value={name}
								onKeyUp={this.handleEdit(id, done)}
								onBlur={this.handleOnblur(id, done)} 
								onChange={(e) => {
										this.setState({name: e.target.value,})
								}}
							/> :
							<p  className='text' style={{opacity:done?'0.5':'1'}} 
								onDoubleClick={() => {
										this.setState({isEditing: true,});  
								}}
							>
								{name}
							</p>
					}
					<button className="del" onClick = {this.delTodo(id)} style={{opacity:mouse?'1':'0'}}>X</button>
			</li>
  )
}