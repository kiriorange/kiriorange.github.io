import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/ProjectPage';
import Navbar from './Components/Navbar';


let Router = BrowserRouter;
class App extends Component {
  render(){
    return(
      <div>
      <Header />

      <Router>
      <div className="bleh">
      <Navbar/>

      <div className="text">
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </div>

      </div>
      </Router>
      </div>
    )
  }
}

export default App;
