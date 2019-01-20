import React, { Component } from 'react';

class Contact extends Component {
  me() {
    return (
      <div>Hi, I'm Maik. I'm a full stack developer, currently working at KST. I also enjoy developing video games, cooking, drawing, and DIY.
</div>
    )
  }

  experience() {
    return (
      <div></div>
    )
  }

  skills() {
    return (
      <div></div>
    )
  }

  render() {
    return(
        <div>
          <h3 className="page-title">About</h3>
          <div className="content-text">
          {this.me()}
          {this.experience()}
          {this.skills()}
          </div>
        </div>
    )
  }
}

export default Contact;
