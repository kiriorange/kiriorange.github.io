import React, { Component } from 'react';
import '../Styles/Contact.css';

class Contact extends Component {

  render() {
    return(
        <div>
          <h3 className="page-title">Contact</h3>
          <div className="content-text contacts">
            <a href="https://www.linkedin.com/in/maik-rantetasik-070abb165/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i>LinkedIn</a>
            <a href="mailto:maikgibranr@gmail.com" target="_blank" rel="noopener noreferrer"><i class="far fa-envelope"></i>Email</a>
            <a href="https://github.com/maikgr" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>Github</a>
          </div>
        </div>
    )
  }
}

export default Contact;
