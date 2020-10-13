import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./css/styles.css"
import "./css/landingpagestyle.css";
import Login from "./components/login"
import TeacherLanding from "./components/Teacherlanding"

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Login}/>
    <Route exact path="/landingPage" component={TeacherLanding}/>
    </div>
    </Router>
  );
}


export default App;