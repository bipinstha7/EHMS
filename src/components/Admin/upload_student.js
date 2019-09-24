import React, { Component } from 'react';

class UploadStudent extends Component {
	onInputChange = e => {
		console.log('image', e.target.files[0]);
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
						type="file"
						name="studentFile"
						className="form-control"
						id="studentFile"
						placeholder="Student File"
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

export default UploadStudent;
