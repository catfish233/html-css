import React, { useState } from 'react';
import { sendInput } from '../actions/action';
import store from '../store';

export default function Item(props){
	
	const [status, setStatus] = useState({
		isEditing:false,
		name: props.name,
		date: props.date,
	})
	console.log(status.name);

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

	//input框失去焦点时，提交修改
	function handleOnblur(id, done){
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

	//todo项done状态更新的回调函数
	function handleCheck (id){
		const date = new Date().toLocaleString();
		return (event)=>{
			//props.updateTodo(id, event.target.checked, date);//传回App组件
			setStatus({
					date: date
			});
		}
  }

	//删除按钮的回调函数
	function delTodo(id){
		return ()=>{
				// if (window.confirm("Do you really want to delete this todo?")) { //确认删除弹窗
				//     this.props.delTodo(id);
				//   }return 
				// props.delTodo(id);
		}
	}

  const{id, done, flag} = props;
  const time = status.date.toLocaleString();

  return (
    <li style = {{backgroundColor:status.mouse ? '#ddd' : 'rgb(235, 232, 219)', 
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