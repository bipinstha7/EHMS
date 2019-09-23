import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="outer">
      <div className="overlay"></div>
      <video autoPlay muted loop id="hero">
        <source src="/exam.mp4" type="video/mp4" />
      </video>
      <div className="hero-container">
        <h1>Exam-Hall Seating Management System</h1>
        <div>
          <Link to="/admin-login" className="btn-get-started">
            Admin
          </Link>
          <Link to="/student" className="btn-get-started">
            Student
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
