import React from "react";
import "../css/landingpagestyle.css";
import Navbar from "./navbar.js";
import LessonPlanButton from "./newLessonPlanbutton"
import LessonTile from "./LessonTile"
import "../css/style.scss";
function TeacherLanding() {
  return (
    <>
      <Navbar />
      <LessonPlanButton />
      <div className="section">
        <div className="container is-fluid">
          <div className="row">
            <LessonTile />
          </div>
        </div>
      </div>
    </>
  );
}
export default TeacherLanding;
    

                        





    

      