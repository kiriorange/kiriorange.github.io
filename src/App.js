import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';


let Router = BrowserRouter;
class App extends Component {
  render(){
    return(
    <Router>
        <div className="container">

       <div className="nav">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/ao">Id</Link>
        </div>

       <div className="text">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/ao" component={Identification} />
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

//State less components
//Home
const Home = ()=> (
  <div>
    <h1>Home</h1>
    <p>This is the Home Page</p>
  </div>
)

//About
const About = ()=>(
  <div>
    <h1>About</h1>
    <p>This is about</p>
  </div>
)

//About
const Identification = ({ match })=>(
  <div>
    <h1>Indentification</h1>
    <p>tisme</p>
  </div>
)

export default App;
