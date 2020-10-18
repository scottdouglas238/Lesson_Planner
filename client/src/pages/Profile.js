import React from 'react'
import "../css/landingpagestyle.css";
import LessonTile from "../components/lessonTiles/LessonTile"
import DepartmentTile from "../components/lessonTiles/departmenttile"
import Navbar from "../components/navbar";
import API from '../utils/API';
import { useStoreContext } from "../utils/GlobalState";


function TeacherLanding() {
      const [globalState, setGlobalState] = useStoreContext();
  console.log(API)
  console.log(setGlobalState)
  return (
    <>
      <Navbar />
      <div className="column">
        <span className="has-text-white is-size-4">
          Welcome <strong className="has-text-white">{globalState.user.firstName}</strong>!
        </span>
      </div>
      {/* <div className="section"> */}
      <div className="container is-fluid">
        <div className="row">
          <h3 className="has-text-white">Your Lessons:</h3>
          <LessonTile />
        </div>
        <div className="row">
          <h3 className="has-text-white">Lessons in your Department:</h3>
          <DepartmentTile />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default TeacherLanding;
