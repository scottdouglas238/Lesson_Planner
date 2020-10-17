import React from "react";
import LessonPlanButton from "./newLessonPlanbutton"

function Navbar() {
  return (
    <nav className="navbar bk">
     
        <div className="navbar-brand">
          <span className="navbar-item has-text-white is-size-3 has-text-weight-bold">
          L-Plan
          </span>
          <span className="navbar-item ">
        <LessonPlanButton/>
          </span>
        </div>
    </nav>
          );
        }
        export default Navbar;
          
        
      
