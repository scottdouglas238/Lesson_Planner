import React, { Component, useState } from "react";
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
      <div class="section">
        <div class="container is-fluid">
          <div class="row">
            <LessonTile />
          </div>
        </div>
      </div>
     
        

      {/* <!-- your lesson plans -->
                <!-- department lesson plans --> */}

      {/* <!-- department lesson plans --> */}
    </>
  );
}
export default TeacherLanding;
    

                        





    

      