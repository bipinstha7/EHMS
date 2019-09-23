import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './list';
import AddAdmin from './add_admin';

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
							<li>
								<Link
									to="/admin/add-student"
									style={{ textDecoration: 'none' }}
								>
									Add Student
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<section id="admin">
				<div className="admin-container">
					<BrowserRouter>
						<Switch>
							<Route exact path="/admin" component={List} />
							<Route exact path="/admin/add-admin" component={AddAdmin} />
						</Switch>
					</BrowserRouter>
				</div>
			</section>
		</div>
	);
};

export default Admin;
