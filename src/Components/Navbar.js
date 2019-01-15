import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: 0,
      isSticked: false,
      isExpanded: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  handleScroll() {
    this.setState({scroll: window.scrollY});
  }

  updateDimensions() {
    const header = document.getElementsByClassName('header')[0];
    this.setState({header: header.clientHeight});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <nav className={`nav ${this.state.scroll > this.state.header ? "fixed-nav" : ""}`}>
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
      </nav>
    )
  }

  dismiss() {
    document.getElementById("nav-check").checked = false;
  }


}


export default Navbar;
