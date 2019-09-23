import React from "react";
// import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#hero">Add Admin</a>
              </li>
              <li>
                <a href="#services">Add Exam Hall</a>
              </li>
              <li>
                <a href="#portfolio">Add Student</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="admin">
        <div className="hero-container">
          <h1>Welcome to Regna</h1>
          <h2>
            We are team of talanted designers making websites with Bootstrap
          </h2>
          <a href="#about" className="btn-get-started">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Admin;
