import React, { Component } from 'react';

class AddExamHall extends Component {
	state = {
		hallNumber: '',
		department: '',
		subject: [],
		students: '',
		teacher: '',
	};

	onInputChange = e => {
		console.log('event', e.target.name);
		console.log('value', e.target.value);

		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = () => {
		// TODO: handle form submission
		console.log('state', this.state);

		this.props.history.replace('/admin');
	};

	render() {
		return (
			<form>
				<div className="form-group">
					<input
						type="text"
						name="hallNumber"
						className="form-control"
						id="hallNumber"
						placeholder="Hall Number"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<select
						className="custom-select"
						name="department"
						onChange={this.onInputChange}
					>
						<option defaultValue>Select Department</option>
						<option value="electronics">Electronics</option>
						<option value="software">Software</option>
						<option value="it">IT</option>
						<option value="computer">Computer</option>
						<option value="civil">Civil</option>
					</select>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="subject"
						className="form-control"
						id="subject"
						placeholder="Subject"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<select
						className="custom-select"
						name="students"
						onChange={this.onInputChange}
					>
						<option defaultValue>Select Students</option>
						<option value="roll_1">Student 1</option>
						<option value="roll_2">Student 2</option>
						<option value="roll_3">Student 3</option>
						<option value="roll_4">Student 4</option>
						<option value="roll_5">Student 5</option>
					</select>
				</div>
				<div className="form-group">
					<select
						className="custom-select"
						name="teacher"
						onChange={this.onInputChange}
					>
						<option defaultValue>Select Teacher</option>
						<option value="teacher_1">Teacher 1</option>
						<option value="teacher_2">Teacher 2</option>
						<option value="teacher_3">Teacher 3</option>
						<option value="teacher_4">Teacher 4</option>
						<option value="teacher_5">Teacher 5</option>
					</select>
				</div>
				<button className="btn btn-primary" onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		);
	}
}

export default AddExamHall;
