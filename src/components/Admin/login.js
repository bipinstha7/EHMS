import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Admin extends Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    // TODO: handle form submission
    console.log("email", this.state.email);
    console.log("password", this.state.password);
    this.props.history.replace("/admin");
  };

  render() {
    return (
      <div id="admin">
        <div className="hero-container">
          <form>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
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
              {/* <label htmlFor="exampleInputPassword1">Password</label> */}
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={this.onInputChange}
              />
            </div>
            <button className="btn btn-primary" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
