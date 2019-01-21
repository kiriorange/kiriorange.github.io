import React, { Component } from 'react';
import '../Styles/About.css';

class About extends Component {
  me() {
    return (
      <div>
      <h2 className="section-title">Hello!</h2>
      <p>Hi, I'm Maik, a full-stack developer with more than 3 years of experience.
      I love learning new technologies and building apps! You can check out some of
      my person projects that I've built in my free time under Projects.</p>
      <p>I currently work as a full-stack developer at <a href="http://kreasitindo.co.id/" target="_blank" rel="noopener noreferrer">KST</a>, where
      I manage and plan most of the projects.</p>
      <p>When I'm not coding, I enjoy playing video games, cooking, drawing and DIY.</p>
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
