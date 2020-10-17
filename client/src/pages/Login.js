import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import img from "../media/58a1cef7e33a543010fac265.png";
import "../css/styles.css";
import { Link } from "react-router-dom";
import "../css/style.scss"

function Login() {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  const [email, setEmail] = useState("science@science.com");
  const [password, setPassword] = useState("12345");
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  function login(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: LOGIN,
          payload: data.message,
        });
        history.push("/profile");
      })
      .catch((err) => handleToggle());
  }
  return (
    <>
      <div className="tile is-8 is-parent " id="right"></div>
      <div className="tile is-5 is-parent" id="left">
        <form onSubmit={login}>
          <div className="tile is-child">
            <p className="title is-2 name">L-plan</p>
            <hr className="hr" />
            <div className="content has-text-grey description">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    value={email}
                    className="input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    value={password}
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
                <button
                  className="button is-success is-inverted is-outlined"
                  type="submit">
                  Submit
                </button>
                
              </div>
                <span class={isActive ? "hidden" : "show"} id="red">
                 The email or password you have entered is invalid, please check the fields and try again.
                </span>
              <div className="has-text-centered">
                
             
                <img
                  className="openbook has-text-centered"
                  src={img}
                  alt="Open Notebook"
                />
                <br></br>
              <div className="has-text-centered"></div>
                <span>Not a member? Sign up <Link to="/signup">here</Link>.</span>
            </div>
              </div>
          </div>
        </form>
      
       
      </div>
    </>
  );
}

export default Login;
