import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch, Link, Redirect } from "react-router-dom";

//Pages
import MainPage from "./Pages/MainPage.jsx";
import NotFoundPage from "./Pages/404.jsx";
import Characteristics from "./Pages/Charac.jsx";
import TokenNumber from "./Pages/TokenNumber.jsx"
import ownerOf from "./Pages/ownerOf.jsx"

class App extends Component{
  
  render() {
    return ( 
    <Router>
      <Switch>
      <Route exact path ="/" component ={ MainPage } />
      <Route exact path = "/404" component = {NotFoundPage} />
      <Route exact path = "/characteristics" component = {Characteristics} />
      <Route exact path = "/token-number" component = {TokenNumber} />
      <Route exact path = "/ownerof" component = {ownerOf} />
      <Redirect to = "/404"/> 
      </Switch>
    </Router>
    );
  }
}
//mettre les chemins dans des variables (path)
export default App;


