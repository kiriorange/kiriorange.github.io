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
    this.updateDimensions = this.updateDimensions.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleScroll() {
    this.setState({scroll: window.scrollY});
  }

  updateDimensions() {
    const header = document.getElementsByClassName('header')[0];
    this.setState({header: header.clientHeight});
  }

    toggleMenu() {
      this.setState({isExpanded: !this.state.isExpanded})
    }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <nav className={`nav${this.state.scroll > this.state.header ? " fixed-nav" : ""} ${this.state.isExpanded ? "dropdown" : "none"}`}>
      <div className="nav-btn">
      <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
      </label>
      </div>

      <input type="checkbox" id="nav-check" checked={this.state.isExpanded} onChange={this.toggleMenu} />

      <div className="nav-piece nav-left">
        <Link onClick={this.toggleMenu} to="/">About</Link>
        <Link onClick={this.toggleMenu} to="/projects">Projects</Link>
      </div>

      <div className="nav-piece nav-right">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <Link onClick={this.toggleMenu} to="/contact">Contact</Link>
      </div>

      </nav>
    )
  }

}


export default Navbar;
