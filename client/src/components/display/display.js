import React, { useEffect, useState } from "react"

import Navbar from "../navbar";
import API from "../../utils/API";
import Label from "./label"
import Box from "./box"
import "../../css/style.scss"
import { Link } from "react-router-dom";
import "../../css/landingpagestyle.css"

function Display(props) {
  const [lesson, setLesson] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    function getLesson(id) {
      API.getLesson(id)
        .then((res) => setLesson(res.data))
        .catch((err) => console.log(err));
    }
    getLesson(id);
  }, [id]);


  return (
    <>
      <Navbar />
      <div className="container appear">
        <div className="columns">
          <div className="column">
            <Label>
              <h5 className="has-text-white">Lesson Name:</h5>
            </Label>
            <Box>
              <p>{lesson.lessonName}</p>
            </Box>
          </div>
          <div className="column">
            <Label>
              <h5 className="has-text-white">Teacher Name:</h5>
            </Label>
            <Box>
              <p>{lesson.teacherName}</p>
            </Box>
          </div>
          <div className="column">
            <Label>
              <h5 className="has-text-white">Department:</h5>
            </Label>

            <Box>
              <p>{lesson.department}</p>
            </Box>
          </div>
          <div className="column">
            <Label>
              <h5 className="has-text-white">Course:</h5>
            </Label>
            <Box>
              <p>{lesson.course}</p>
            </Box>
          </div>
          <div className="column">
            <Label>
              <h5 className="has-text-white">Grade Level:</h5>
            </Label>
            <Box>
              <p>{lesson.gradeLevel}</p>
            </Box>
          </div>
        </div>
        {/* ↑first group of items */}
        <div className="columns">
          <div className="column">
            <Label>
              <h5 className="has-text-white">Concepts:</h5>
            </Label>
            <Box>
              <p>{lesson.concepts}</p>
            </Box>
          </div>
          <div className="column">
            <Label>
              <h5 className="has-text-white">Standards:</h5>
            </Label>
            <Box>
              <p>{lesson.standards}</p>
            </Box>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Label>
              <h5 className="has-text-white">Skills:</h5>
            </Label>
            <Box>
              <p>{lesson.skills}</p>
            </Box>
          </div>
          <div className="column">
            <Label>
              <h5 className="has-text-white">Objectives:</h5>
            </Label>
            <Box>
              <p>{lesson.objectives}</p>
            </Box>
          </div>
        </div>
        <Label>
          <h5 className="has-text-white">Materials:</h5>
        </Label>
        <Box>
          <p>{lesson.materials}</p>
        </Box>
        <Label>
          <h5 className="has-text-white">Goal:</h5>
        </Label>
        <Box>
          <p>{lesson.goal}</p>
        </Box>
        <Label>
          <h5 className="has-text-white">Opening Activity:</h5>
        </Label>
        <Box>
          <p>{lesson.openingActivity}</p>
        </Box>
        <Label>
          <h5 className="has-text-white">Activity:</h5>
        </Label>
        <Box>
          <p>{lesson.activity}</p>
        </Box>
        <Label>
          <h5 className="has-text-white">Assessment:</h5>
        </Label>
        <Box>
          <p>{lesson.assessment}</p>
        </Box>
        <Label>
          <h5 className="has-text-white">Closing Activity:</h5>
        </Label>
        <Box>
          <p>{lesson.closingActivity}</p>
        </Box>
        <Link to="/profile">
      <button className="cardBtn">Go back</button>
        </Link>
      </div>
      <br></br>
    </>
  );
}
export default Display;



