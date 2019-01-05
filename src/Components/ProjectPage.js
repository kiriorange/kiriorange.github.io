import React, { Component } from 'react';
import Project from './Project';
import allProjects from './AllProjects';

class Projects extends Component {
  renderProjects() {
      return (
        allProjects.map(function(p) {
          return <Project thumbnail={p.thumbnail} shortdesc={p.shortdesc} title={p.title} />;
        })
      )
  }

  render() {
    return(
        <div>Projects
        {this.renderProjects()}
        </div>
    )
  }
}

export default Projects;
