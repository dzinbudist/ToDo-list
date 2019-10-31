import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';

class Modal extends React.Component {
	render() {
		if (!this.props.show) {
			return null;
		}

		return (
			<div className="backdrop">
				<div className="modalForm">
					{/*this.props.children*/}

					<div class="form-group">
						<label for="title">To Do Title</label>
						<input type="text" id="title" class="form-control"></input>
						<label for="priority">Priority</label>
						<select name="priority" id="priority" class="form-control">
							<option value="Low">Low</option>
							<option value="Normal">Normal</option>
							<option value="High">High</option>
						</select>
						<label for="duDate">Due Date</label>
						<input type="date" id="duDate" class="form-control" defaultValue={this.props.date}></input>

						<label for="status">Status</label>
						<select name="status" id="status" class="form-control">
							<option value="New">New</option>
							<option value="Completed">Completed</option>
						</select>
					</div>
					<div className="footer">
						<button class="btn btn-success" onClick={this.props.addNew}>
							Add
            </button>
						<button class="btn btn-danger" onClick={this.props.onClose}>
							Close
            </button>
					</div>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
	children: PropTypes.node,
	addNew: PropTypes.func.isRequired
};

export default Modal;