import React, { Component } from 'react';
import Project from './Project';
import allProjects from './AllProjects';

class Projects extends Component {
  renderProjects() {
      return (
        allProjects.map(function(p) {
          return <Project {...p}/>;
        })
      )
  }

  render() {
    return(
        <div style={{height: "1000px"}}>Projects
        {this.renderProjects()}
        </div>
    )
  }
}

export default Projects;
