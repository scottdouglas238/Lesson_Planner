import React from 'react'
import "../css/landingpagestyle.css";
import LessonPlanButton from "../components/newLessonPlanbutton"
import LessonTile from "../components/LessonTile"
import Navbar from "../components/navbar";

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
  )
}

export default TeacherLanding;
