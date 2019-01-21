import React, { Component } from 'react';
import '../Styles/Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isContracted: true,
      displayText: null,
    }
  }

  render() {
    var props = this.props;

    return (
      <div className="wrapper">
        <div className={`project ${this.state.isContracted ? 'contracted' : ''}`}>

          <div className="preview project-container">
            <img className="thumbnail" src={props.thumbnailurl} alt="thumbnail" width="100px" height="100px"/>
            <div className="right">
              <h3 className="project-title">{props.title}</h3>
              {this.techBlock(props)}
              <div className="desc">{props.shortdesc}</div>
            </div>
          </div>

          <div className="project-container">{this.state.displayText}</div>

          {this.readMoreLessButton()}

        </div>
      </div>
    )
  }

  techBlock(props) {
    if (!props.download) {
      return (
        <div className="technologies">
          <i class="icon fas fa-code"></i>{this.tech(props.techs)}
          <i class="icon fab fa-github-alt"></i><a href={props.github} target="_blank" rel="noopener noreferrer">View on Github</a>
      </div>
      )
    }

    return (
      <div className="technologies">
        <i class="icon fas fa-code"></i>{this.tech(props.techs)}
        <i class="icon fab fa-github-alt"></i><a href={props.github} target="_blank" rel="noopener noreferrer">View on Github</a>
        <i class="icon far fa-file"></i><a href={props.download} target="_blank" rel="noopener noreferrer">See site</a>
    </div>
    )
  }

  tech(techs) {
    let techLength = techs.length;
    return (
      techs.map(function(tech, i) {
        return i === techLength - 1 ?
          <span>{tech}</span> :
          <span>{tech}, </span>;
      })
    )
  }

  goLink(props) {
    if (props.go) {
      return (
        <span>
        <i class="far fa-arrow-alt-circle-right"></i>
        viewApp
        </span>
      )
    }
  }

  readMoreLessButton() {
    return (
      <div className="readMoreLess"
      onClick={this.state.isContracted ? this.readMore.bind(this) : this.readLess.bind(this)}>
      {this.state.isContracted ? <i class="icon fas fa-chevron-down"></i> : <i class="icon fas fa-chevron-up"></i>}
      {this.state.isContracted ? <span>Read More</span> : <span>Read Less</span>}
      </div>
    )
  }

  readMore() {
    this.setState({isContracted: false});
    this.setState({displayText: this.props.long});
  }

  readLess() {
    this.setState({isContracted: true});
    this.setState({displayText: null});
  }
}

export default Project;
