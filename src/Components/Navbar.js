import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div class="nav">
        <div class="nav-header">
          <div class="nav-title">
            JoGeek
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <input type="checkbox" id="nav-check" />
        <div class="nav-links">
        <Link onClick={this.dismiss} to="/">Home</Link>
        <Link onClick={this.dismiss} to="/projects">Projects</Link>
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
