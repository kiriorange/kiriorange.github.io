import React, { Component } from 'react';
import '../Styles/About.css';

class About extends Component {
  me() {
    return (
      <div>
      <h2 className="section-title">Hi I'm Maik!</h2>
      <p>Hi, I'm Maik, a full-stack developer with more than 3 years of experience. I love learning new technologies</p>
      </div>
    )
  }


  skills() {
    return (
      <div>
      <h2 className="section-title">Skills</h2>
      
      </div>
    )
  }

  render() {
    return(
        <div>
          <h3 className="page-title">About</h3>
          <div className="content-text">
          {this.me()}
          {this.skills()}
          </div>
        </div>
    )
  }
}

export default About;
