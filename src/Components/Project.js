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
              <div className="technologies">

              <i class="fas fa-code"></i>{this.tech(props.techs)}
              <i class="fab fa-github-alt"></i>

              </div>
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
      onClick={this.state.isContracted ? this.readMore.bind(this) : this.readLess.bind(this)}>
      {this.state.isContracted ? <i class="fas fa-chevron-down"></i> : <i class="fas fa-chevron-up"></i>}
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
