import React, { Fragment } from 'react';

const List = () => {
	return (
		<Fragment>
			<div>
				<h1>List of students with exam hall</h1>
				<h2>Show table here</h2>
				<table className="table table-striped table-dark">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Hall Number</th>
							<th scope="col">Department</th>
							<th scope="col">Subject</th>
							<th scope="col">Students</th>
							<th scope="col">Teacher</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>19</td>
							<td>Software</td>
							<td>DSA</td>
							<td>amit, binod, nepal, bharat</td>
							<td>Samsher</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>19</td>
							<td>Software</td>
							<td>DSA</td>
							<td>amit, binod, nepal, bharat</td>
							<td>Samsher</td>
						</tr>
						<tr>
							<th scope="row">1</th>
							<td>19</td>
							<td>Software</td>
							<td>DSA</td>
							<td>amit, binod, nepal, bharat</td>
							<td>Samsher</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default List;
