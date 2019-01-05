import React, { Component } from 'react';
import '../Styles/Project.css'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      displayText: "",
      expandText: ""
    }
  }

  render() {
    var props = this.props;
    
    return (
      <div class="project">
        Project
        {props.thumbnail}
        <span class="title">{props.title}</span>
        <div class="desc">{props.shortdesc}</div>
      </div>
    )
  }

  tech(techs) {

  }
}

export default Project;
