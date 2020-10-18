import React from "react";
import LessonPlanButton from "./newLessonPlanbutton"
import { useStoreContext } from "../utils/GlobalState";
import "../css/style.scss"
import { Link } from "react-router-dom";

function Navbar() {
    const [globalState, setGlobalState] = useStoreContext();

  return (
    <nav className="navbar bk">
      <div className="navbar-brand">
        <span className="navbar-item has-text-white is-size-1 has-text-weight-bold">
          L-Plan
        </span>
        <div className="navbar-start">
          <span className="navbar-item">
            <LessonPlanButton />
          </span>
        </div>
      </div>
      <div className="navbar-end ml-6">
        <span className="navbar-item logOut ml-6" id="logOut">
          <Link style={{ color: 'inherit'}} to="/">Log out</Link>
        </span>
      </div>
    </nav>
  );
        }
        export default Navbar;
          
        
      
