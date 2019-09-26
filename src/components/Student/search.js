import React, { Component } from 'react';

class SearchStudent extends Component {
	state = {
		search: '',
	};

	onInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = () => {
		// TODO: handle form submission
		console.log('email', this.state.email);
		console.log('password', this.state.password);
		this.props.history.replace('/student/exam-hall');
	};

	render() {
		return (
			<form>
				<div className="form-group">
					<input
						type="text"
						name="search"
						className="form-control"
						id="search"
						placeholder="Search with roll number"
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

export default SearchStudent;
