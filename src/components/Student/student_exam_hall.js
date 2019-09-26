import React, { Component } from 'react';

class StudentExamHall extends Component {
	onInputChange = e => {
		console.log('image', e.target.files[0]);
	};

	render() {
		return (
			<div>
				<h1>Show student exam hall information here</h1>
				<table className="table table-striped table-dark">
					<thead>
						<tr>
							<th scope="col">Hall Number</th>
							<th scope="col">Department</th>
							<th scope="col">Subject</th>
							<th scope="col">Teacher</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">309</th>
							<td>Electronics</td>
							<td>Telecommunication</td>
							<td>Keshab</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default StudentExamHall;
