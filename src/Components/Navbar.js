import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <input type="checkbox" id="nav-check" />
        <div className="nav-links">
        <Link onClick={this.dismiss} to="/">About</Link>
        <Link onClick={this.dismiss} to="/projects">Projects</Link>
        <Link onClick={this.dismiss} to="/contact" className="brand">Maik</Link>
        <Link onClick={this.dismiss} to="/contact">Resume</Link>
        <Link onClick={this.dismiss} to="/contact">Contact</Link>
        </div>
      </div>
    )
  }

  dismiss() {
    document.getElementById("nav-check").checked = false;
  }
}


export default Navbar;
