import React, { useEffect, useState } from "react"

import Navbar from "../navbar";
import API from "../../utils/API";
import Label from "./label"
import Box from "./box"

function Display(props) {
  const [lesson, setLesson] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getLesson(id);
  });

  function getLesson(id) {
    API.getLesson(id)
      .then((res) => setLesson(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Label>
          <h5>Teacher Name:</h5>
        </Label>
        <Box>
          <p>{lesson.teacherName}</p>
        </Box>

        <Label>
          <h5>Lesson Name:</h5>
        </Label>
        <Box>
          <p>{lesson.lessonName}</p>
        </Box>
        <Label>
          <h5>Department:</h5>
        </Label>
        <Box>
          <p>{lesson.department}</p>
        </Box>
        <Label>
          <h5>Course:</h5>
        </Label>
        <Box>
          <p>{lesson.course}</p>
        </Box>
        <Label>
          <h5>Grade Level:</h5>
        </Label>
        <Box>
          <p>{lesson.gradeLevel}</p>
        </Box>
        <Label>
          <h5>Concepts:</h5>
        </Label>
        <Box>
          <p>{lesson.concepts}</p>
        </Box>

        <Label>
          <h5>Standards:</h5>
        </Label>
        <Box>
          <p>{lesson.standards}</p>
        </Box>
        <Label>
          <h5>Skills:</h5>
        </Label>
        <Box>
          <p>{lesson.skills}</p>
        </Box>
        <Label>
          <h5>Objectives:</h5>
        </Label>
        <Box>
          <p>{lesson.objectives}</p>
        </Box>
        <Label>
          <h5>Materials:</h5>
        </Label>
        <Box>
          <p>{lesson.materials}</p>
        </Box>
        <Label>
          <h5>Goal:</h5>
        </Label>
        <Box>
          <p>{lesson.goal}</p>
        </Box>
        <Label>
          <h5>Opening Activity:</h5>
        </Label>
        <Box>
          <p>{lesson.openingActivity}</p>
        </Box>
        <Label>
          <h5>Activity:</h5>
        </Label>
        <Box>
          <p>{lesson.activity}</p>
        </Box>
        <Label>
          <h5>Assessment:</h5>
        </Label>
        <Box>
          <p>{lesson.assessment}</p>
        </Box>
        <Label>
          <h5>Closing Acitivity:</h5>
        </Label>
        <Box>
          <p>{lesson.closingActivity}</p>
        </Box>
      </div>
    </>
  );
}
export default Display;



