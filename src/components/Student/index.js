import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchStudent from './search';
import StudentExamHall from './student_exam_hall';

class Student extends Component {
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
		this.props.history.replace('/student-exam-hall');
	};

	render() {
		return (
			<section id="admin">
				<div className="admin-container">
					<Switch>
						<Route exact path="/student" component={SearchStudent} />
						<Route
							exact
							path="/student/exam-hall"
							component={StudentExamHall}
						/>
					</Switch>
				</div>
			</section>
		);
	}
}

export default Student;
