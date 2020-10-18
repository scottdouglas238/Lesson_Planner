import React, { useState } from "react";
import { SIGNUP } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import img from "../media/58a1cef7e33a543010fac265.png";
import invis from "../media/invis.png";
import "../css/styles.css";
import { Link } from "react-router-dom";

function Login(props) {
  const [state, dispatch] = useStoreContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
    setEmail("")
    setPassword("")
    setFirstName("")
    setLastName("")
  };
  console.log(state)
  function signUp(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email,
        password,
        department,
        firstName,
        lastName,
      }),
    })
      .then((data) => {
        console.log(data)
        dispatch({
          type: SIGNUP,
          payload: data.message,
        });
        handleToggle();
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="tile is-8 is-parent " id="right"></div>
      <div className="tile is-5 is-parent" id="left">
        <form onSubmit={signUp}>
          <div className="tile is-child">
            <p className="title is-2 name">L-plan</p>
            <hr className="hr" />
            <div className="content has-text-grey description">
              {/* this is where the email goes */}
              <span className="has-text-white">Department:</span>
              <div className="field">
                <div className="select">
                  <select
                    value={department}
                    className="input"
                    type="input"
                    placeholder="Department"
                    onChange={(e) => setDepartment(e.target.value)}>
                    <option>Administration</option>
                    <option>Classifed Staff</option>
                    <option>English</option>
                    <option>Foreign Language</option>
                    <option> Health and P.E.</option>
                    <option>Math</option>
                    <option>Science</option>
                    <option>Social Studies</option>
                    <option>Shop and Agriculture</option>
                    <option>SPED</option>
                    <option>Visual and Performing Arts</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

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
              {/* this is where the first name goes */}
              <div className="field">
                <p className="control">
                  <input
                    value={firstName}
                    className="input"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </p>
              </div>
              {/* last name */}
              <div className="field">
                <p className="control">
                  <input
                    value={lastName}
                    className="input"
                    type="input"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </p>
              </div>
              {/* department */}
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
              </div>
              <button
                className="button is-success is-inverted is-outlined"
                type="submit">
                Submit
              </button>
              <div className="hidden" id="hidden">
                You have successfully created an account! Click{" "}
                <Link to="/">here</Link> to log in!
              </div>
              <div className="has-text-centered">
                <span class={isActive ? "hidden" : "show"}>
                  Sign-up successful, please click <Link to="/">here</Link> to
                  log in.
                </span>
                <br></br>

                <img
                  className="openbook has-text-centered"
                  src={img}
                  alt="Open Notebook"
                />
              </div>
              <div className="has-text-centered">
                <span>
                  Already a member? Click <Link to="/">here</Link> to log in.
                </span>
              </div>
              <img
                className="openbook has-text-centered invis"
                src={invis}
                alt="Open Notebook"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
  
        
             
           
