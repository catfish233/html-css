import React, { Component } from 'react';
import { delTodo, } from '../actions/action';
import store from '../store';

class Item extends Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing: false,
			name: props.name,
			date: props.date,
			id: props.id,
			done: props.done,
		}
	}

	handleDel = (id) =>{
		const action = delTodo(id);
		// store.dispatch(action);//传给store一个id，
	}

	handleCheck = (id) =>{
		const action = 
	}
	
	render(){
		const {isEditing, name, date, id, done} = this.state;
	
		const time = date.toLocaleString();
		return (
			<li>   
				<input type="checkbox" onChange={this.handleCheck(id)} defaultChecked = {done} />
				<p id='Time'>{time}</p>{/* 设置为<p style={{opacity:done?'0.5':'1'}}>{time}</p>之后，复选框就不能点击 */}
				{
					isEditing ?
						<input className='input'
							autoFocus value={name}
							onChange={(e) => {
								this.setState({name: e.target.value,})
							}}
						/> :
						<p  className='text' style={{opacity:'1'}} 
							onDoubleClick={() => {
								this.setState({isEditing: true,});  
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