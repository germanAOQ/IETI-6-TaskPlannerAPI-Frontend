import React, { useState } from 'react';
import "./UserList.css"

class UserList extends React.Component{
	constructor(props) {
		super(props)
	}
	
	
	
	
	render(){
		
		const tabla = this.props.lista.map((elemento) => (
		
	<tr>
		<td>{elemento.name}</td>
		<td>{elemento.email}</td>
	</tr>
	));
		return (
			<div>
			<table>
			<tr>
    <th>Name</th>
    <th>Email</th> 
  </tr>
  {tabla}
  		</table>

			</div>
		);
	}
}

export default UserList;