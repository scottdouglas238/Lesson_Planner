import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login"
import TeacherLanding from "./components/Teacherlanding"
import lessonPlanForm from "./components/form";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/landingPage" component={TeacherLanding} />
        <Route exact path="/newLessonPlan" component={lessonPlanForm} />
      </div>
    </Router>
  );
}


export default App;