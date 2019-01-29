import React, { Component } from 'react';
import '../Styles/Contact.css';

class Contact extends Component {

  render() {
    return(
        <div>
          <h3 className="page-title">Contact</h3>
          <div className="content-text contacts">
            <a href="mailto:zeke.tan@vanderbilt.edu" target="_blank" rel="noopener noreferrer"><i class="far fa-envelope"></i>Email</a>
            <a href="https://github.com/kiriorange" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>Github</a>
          </div>
        </div>
    )
  }
}

export default Contact;
