import React, { Component } from 'react';

class AddAdmin extends Component {
	state = {
		email: '',
		password: '',
		confirmPassword: '',
	};

	onInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = () => {
		// TODO: handle form submission
		console.log('email', this.state.email);
		console.log('password', this.state.password);
		this.props.history.replace('/admin');
	};

	render() {
		return (
			<form>
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
						type="password"
						name="password"
						className="form-control"
						id="password"
						placeholder="Password"
						onChange={this.onInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="confirmPassword"
						className="form-control"
						id="confirmPassword"
						placeholder="Confirm Password"
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

export default AddAdmin;
