import React, { Component } from "react";
import "./App.css";
import "./css/styles.css"
import Login from "./components/login"

function App() {
  return (
    <div className="App">

      <div className="tile is-8 is-parent " id="right"></div>
    <div className="tile is-5 is-parent" id="left">
     <Login/>
    </div>
    </div>
  );
}


export default App;
