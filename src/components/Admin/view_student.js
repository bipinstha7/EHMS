import React, { Component } from 'react';

class ViewStudent extends Component {
	onInputChange = e => {
		console.log('image', e.target.files[0]);
	};

	handleSubmit = () => {
		// TODO: handle form submission
		this.props.history.replace('/admin');
	};

	render() {
		return (
			<div>
				<h1>Show list of students here</h1>
				<table className="table table-striped table-dark">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Roll Number</th>
							<th scope="col">Department</th>
							<th scope="col">Semester</th>
							<th scope="col">Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Shovit Nepal</td>
							<td>shovit@nepal.com</td>
							<td>15094</td>
							<td>IT</td>
							<td>6th</td>
							<td>2015</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Shovit Nepal</td>
							<td>shovit@nepal.com</td>
							<td>15094</td>
							<td>IT</td>
							<td>6th</td>
							<td>2015</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>Shovit Nepal</td>
							<td>shovit@nepal.com</td>
							<td>15094</td>
							<td>IT</td>
							<td>6th</td>
							<td>2015</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default ViewStudent;
