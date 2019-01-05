import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/ProjectPage';


let Router = BrowserRouter;
class App extends Component {
  render(){
    return(
      <Router>
      <div className="container">

      <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      </div>

      <div className="text">
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </div>

      </div>
      </Router>
    )
  }
}

//State less components
//Home
const Header = ()=> (
  <div>
  <div className="header"></div>
  <App />
  </div>
)

export default App;
