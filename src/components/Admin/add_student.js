import React, { Component } from 'react';

class AddStudent extends Component {
	state = {
		name: '',
		email: '',
		rollNumber: '',
		department: '',
		semester: '',
		year: '',
	};

	onInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = () => {
		// TODO: handle form submission
		this.props.history.replace('/admin');
	};

	render() {
		return (
			<form>
				<div className="form-group">
					<input
						type="text"
						name="name"
						className="form-control"
						id="name"
						placeholder="Name"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						name="email"
						className="form-control"
						id="email"
						placeholder="Email"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="rollNumber"
						className="form-control"
						id="rollNumber"
						placeholder="Roll Number"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="department"
						className="form-control"
						id="department"
						placeholder="Department"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="semester"
						className="form-control"
						id="semester"
						placeholder="Semester"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="date"
						name="year"
						className="form-control"
						id="year"
						placeholder="Year"
						onChange={this.onInputChange}
					/>
				</div>
				<button className="btn btn-primary" onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		);
	}
}

export default AddStudent;
