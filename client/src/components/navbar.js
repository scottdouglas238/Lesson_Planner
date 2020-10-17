import React from "react";
import LessonPlanButton from "./newLessonPlanbutton"
import { useStoreContext } from "../utils/GlobalState";
import "../css/style.scss"


function Navbar() {
    const [globalState, setGlobalState] = useStoreContext();

  return (
    <nav className="navbar bk">
      <div className="navbar-brand">
        <span className="navbar-item has-text-white is-size-1 has-text-weight-bold">
          L-Plan
        </span>

        {/* <span className="navbar-item has-text-white is-size-6 has-text-weight-light">
            Welcome {globalState.user.firstName}!
          </span> */}
        <div className="navbar-start">
          <span className="navbar-item">
            <LessonPlanButton />
          </span>
        </div>
      </div>
      <div className="navbar-end ml-6">
        <span className="navbar-item has-text-white ml-6" id="logOut">
          Log out
        </span>
      </div>
    </nav>
  );
        }
        export default Navbar;
          
        
      
