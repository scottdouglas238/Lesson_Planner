import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import img from "../media/58a1cef7e33a543010fac265.png";
import axios from "axios";
import "../css/styles.css";


function Login(){
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function login(e){
    e.preventDefault()
    fetch("/api/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      }).then((res)=> res.json())
      .then((data)=> {
        dispatch({
          type:LOGIN,
          payload: data.message,
        });
        history.push("/api/landingpage");
      }).catch((err)=> console.log(err));
    }

    return (
      <>
        <div className="tile is-8 is-parent " id="right"></div>
        <div className="tile is-5 is-parent" id="left">
          <form onSubmit ={login} >
            <div className="tile is-child">
              <p className="title is-2 name">L-plan</p>
              <hr className="hr" />
              <div className="content has-text-grey description">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
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
                      className="input"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </p>
                  <button type="submit"
                    className="button is-success is-inverted is-outlined">
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
          </form>
        </div>
      </>
    );
  }
export default Login;


    // axios.post("/api/signup")
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // })