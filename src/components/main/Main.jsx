import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './main.css';
import Todo from '../toDoItem/Todo';

function Main({ aList, onClick, onChange, updated }) {

	const todos = aList.map(todo =>
		<Todo
			key={todo.id}
			id={todo.id}
			title={todo.title}
			priority={todo.priority}
			duDate={todo.duDate}
			status={todo.status}
			check={todo.check}
			percents={todo.percents}
			modified={todo.modified}
			onClick={onClick}
			onChange={onChange}
		/>
	)
	return (
		<div className="container table-responsive">
			<table class="table table-hover">
				<thead class="table-bordered thead-light">
					<tr>
						<th class="text-center col1"><i class="fas fa-chart-bar text-info"></i></th>
						<th class="col2">Subject</th>
						<th class="col3">Priority</th>
						<th class="col4">Due Date</th>
						<th class="col5">Status</th>
						<th class="col6">Percent Completed</th>
						<th class="col7">Modified On</th>
						<th class="text-center col8"><i class="fas fa-trash text-info"></i></th>
					</tr>
				</thead>
				<tbody class="">
					{todos}
				</tbody>
			</table>
		</div>
	)
}

export default Main;			