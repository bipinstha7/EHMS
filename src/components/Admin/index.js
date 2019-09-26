import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import List from './list';
import AddAdmin from './add_admin';
import AddStudent from './add_student';
import UploadStudent from './upload_student';
import AddExamHall from './add_exam_hall';
import ViewStudent from './view_student';

const Admin = () => {
	return (
		<div>
			<header id="header">
				<div className="container">
					<nav id="nav-menu-container">
						<ul className="nav-menu">
							<li className="menu-active">
								<Link to="/admin" style={{ textDecoration: 'none' }}>
									List
								</Link>
							</li>
							<li>
								<Link to="/admin/add-admin" style={{ textDecoration: 'none' }}>
									Add Admin
								</Link>
							</li>
							<li>
								<Link
									to="/admin/add-exam-hall"
									style={{ textDecoration: 'none' }}
								>
									Add Exam Hall
								</Link>
							</li>
							<li className="menu-has-children">
								<a href="#">Student</a>
								<ul>
									<li>
										<Link
											to="/admin/add-student"
											style={{ textDecoration: 'none' }}
										>
											Add
										</Link>
									</li>
									<li>
										<Link
											to="/admin/upload-student"
											style={{ textDecoration: 'none' }}
										>
											Upload
										</Link>
									</li>
									<li>
										<Link
											to="/admin/view-student"
											style={{ textDecoration: 'none' }}
										>
											View
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<section id="admin">
				<div className="admin-container">
					<Switch>
						<Route exact path="/admin" component={List} />
						<Route exact path="/admin/add-admin" component={AddAdmin} />
						<Route exact path="/admin/add-exam-hall" component={AddExamHall} />
						<Route exact path="/admin/add-student" component={AddStudent} />
						<Route exact path="/admin/view-student" component={ViewStudent} />
						<Route
							exact
							path="/admin/upload-student"
							component={UploadStudent}
						/>
					</Switch>
				</div>
			</section>
		</div>
	);
};

export default Admin;
