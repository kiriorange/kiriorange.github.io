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
        <div>
            <h3 className="page-title">Projects</h3>
            {this.renderProjects()}
        </div>
    )
  }
}

export default Projects;
