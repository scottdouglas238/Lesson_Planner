import React from 'react'
import "../css/landingpagestyle.css";
import LessonTile from "../components/lessonTiles/LessonTile"
import DepartmentTile from "../components/lessonTiles/departmenttile"
import Navbar from "../components/navbar";
import API from '../utils/API';

function TeacherLanding() {
  
  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container is-fluid">
          <div className="row">
            <h3>Your Lessons:</h3>
            <LessonTile />
          </div>
          <div className="row">
            <h3>Lessons in your Department:</h3>
           <DepartmentTile />
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherLanding;
