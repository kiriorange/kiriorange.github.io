import React, { Component } from 'react';
import '../Styles/About.css';

class About extends Component {
  me() {
    return (
      <div>
      <h2 className="section-title">Hello!</h2>
      <p>Hello~</p>
      </div>
    )
  }


  render() {
    return(
        <div>
          <h3 className="page-title">About</h3>
          <div className="content-text">
          {this.me()}
          </div>
        </div>
    )
  }
}

export default About;
