// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">Drive<span>y</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav">
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="/cars" className="nav-link">Cars</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
		  <button className="btn btn-primary ml-2" type="button">Login</button>
		  <button className="btn btn-primary ml-2" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
