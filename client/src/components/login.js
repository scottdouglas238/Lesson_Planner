import React, { Component } from "react";
import img from "../media/58a1cef7e33a543010fac265.png";

class Login extends Component {
  render() {
    return (
      <div className="tile is-child">
        <p className="title is-2 name">L-plan</p>
        <hr className="hr" />
        <div className="content has-text-grey description">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
            <button className="button is-success is-inverted is-outlined">
              Submit
            </button>
          </div>
          <div className="has-text-centered">
            <br></br>
            <br></br>
            <img
              className="openbook has-text-centered"
              src={img}
              alt="Open Notebook"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
