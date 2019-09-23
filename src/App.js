import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Landing from './components/landing';
import Admin from './components/Admin';
import AdminLogin from './components/Admin/login';
import Student from './components/Student';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/admin-login" component={AdminLogin} />
				<Route exact path="/student" component={Student} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
