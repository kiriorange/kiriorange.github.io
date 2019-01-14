import React, { Component } from 'react';
import '../Styles/Project.css'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      displayText: null,
    }
  }

  render() {
    var props = this.props;

    return (
      <div className="wrapper">
        <div className="project">

          <div className="preview project-container">
            <img className="thumbnail" src={props.thumbnailurl} alt="thumbnail" width="100px" height="100px"/>
            <div className="right">
              <h3 className="project-title">{props.title}</h3>
              <div className="technologies">{this.tech(props.techs)}</div>
              <div className="desc">{props.shortdesc}</div>
            </div>
          </div>

          <div className="project-container">{this.state.displayText}</div>

          {this.readMoreLessButton()}

        </div>
      </div>
    )
  }

  tech(techs) {
    return (
      techs.map(function(tech) {
        return <span>{tech} </span>;
      })
    )
  }

  readMoreLessButton() {
    return (
      <div className="readMoreLess"
      onClick={this.state.expanded ? this.readLess.bind(this) : this.readMore.bind(this)}>{this.state.expanded ? "Read Less" : "Read More"}</div>
    )
  }

  readMore() {
    this.setState({expanded: true});
    this.setState({displayText: this.props.long});
  }

  readLess() {
    this.setState({expanded: false});
    this.setState({displayText: null});
  }
}

export default Project;
