import React from 'react';
import PropTypes from 'prop-types';
import styles from './todo.css';
import App from '../app/App';

function Todo(props) {
	let aPriorityClass = "badge badge-success"
	let aTitleStyle = "noStyle"
	let aChecked = false;
	let aRowClass = "";

	if (props.priority == "Normal") {
		aPriorityClass = "badge badge-primary"
	}
	else if (props.priority == "High") {
		aPriorityClass = "badge badge-danger"
	}

	if (props.check == "true") {
		aTitleStyle = "lined"
		aChecked = true;
		aRowClass = "table-success";
	}
	else {
		aTitleStyle = ""
		aChecked = false;
		aRowClass = "";
	}

	function doCheck() {
		let aChecked = props.check == "true"
		props.onChange(props.id, aChecked);
	}

	function removeRecord() {
		props.onClick(props.id);
	}

	return (
		<tr class={aRowClass}>
			<td><input type="checkbox" onChange={doCheck} checked={aChecked}></input></td>
			<td class={aTitleStyle}> {props.title} </td>
			<td><div class={aPriorityClass}>{props.priority}</div></td>
			<td>{props.duDate}</td>
			<td class="col5">{props.status}</td>
			<td>{props.percents}</td>
			<td>{props.modified}</td>
			<td class="deleteTd"><a href="#" class="btn btn-danger btn-sm delete" onClick={removeRecord}>X</a></td>
		</tr >
	)
}

export default Todo;