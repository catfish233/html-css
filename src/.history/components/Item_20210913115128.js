import React, { Component, useState, } from 'react';
import { delTodo, } from '../actions/action';
import store from '../store';

class Item extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	handleDel = (id) =>{
		// console.log(id);
		const action = delTodo(id);
		// store.dispatch(action);//传给store一个id，
	}
	
	render(){
		const {isEditing, name, date, id, done} = this.props;
	
		const time = date.toLocaleString();
		return (
			<li>   
				<input type="checkbox" defaultChecked = {done} />
				<p id='Time'>{time}</p>{/* 设置为<p style={{opacity:done?'0.5':'1'}}>{time}</p>之后，复选框就不能点击 */}
				{
					isEditing ?
						<input className='input'
							autoFocus value={name}
							onChange={(e) => {
								setStatus({name: e.target.value,})
							}}
						/> :
						<p  className='text' style={{opacity:'1'}} 
							onDoubleClick={() => {
								setStatus({isEditing: true,});  
							}}
						>
							{name}
						</p>
				}
				<button className="del" onClick={this.handleDel(id)} style={{opacity:'1'}}>X</button>
			</li>
  	)
	}
}

export default Item;