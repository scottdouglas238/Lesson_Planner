import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import Navbar from "../navbar";
import API from "../../utils/API";
import Label from "./label"
import Box from "./box"


function Update(props) {
  const [lesson, setLesson] = useState({});
  const id = props.match.params.id;
  const [globalState, setGlobalState] = useStoreContext();
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    getLesson(id);
    console.log(id)
  }, []);


  function getLesson(id) {
    API.getLesson(id)
      .then((res) => setLesson(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({
      ...formObject,
      [name]: value,
    });
  }



function handleFormSubmit(event) {
  event.preventDefault();
  console.log();
  if (formObject.teacherName && formObject.lessonName) {
    API.editLesson({
      _id: formObject.id,
      userId: globalState.user.id,
      teacherName: formObject.teacherName,
      lessonName: formObject.lessonName,
      department: formObject.department,
      course: formObject.course,
      gradeLevel: formObject.gradeLevel,
      concepts: formObject.concepts,
      standards: formObject.standards,
      skills: formObject.skills,
      objectives: formObject.objectives,
      materials: formObject.materials,
      goal: formObject.goal,
      openingActivity: formObject.openingActivity,
      activity: formObject.activity,
      assessment: formObject.assessment,
      closingActivity: formObject.closingActivity,
    })
      .then(console.log("test"))
      // ^ make this a redirect back to the teacher landing page
      .catch((err) => console.log(err));
  }
}



  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="column">
          <form>
            <Label>
              <h5>Teacher Name:</h5>
            </Label>
            <input
              defaultValue={lesson.teacherName}
              onChange={handleInputChange}></input>
            <Label>
              <h5>Lesson Name:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.lessonName}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Department:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.department}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Course:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.course}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Grade Level:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.gradeLevel}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Concepts:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.concepts}
                onChange={handleInputChange}></input>
            </Box>

            <Label>
              <h5>Standards:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.standards}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Skills:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.skills}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Objectives:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.objectives}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Materials:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.materials}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Goal:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.goal}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Opening Activity:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.openingActivity}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Activity:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.activity}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Assessment:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.assessment}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Closing Acitivity:</h5>
            </Label>
            <Box>
              <input
                defaultValue={lesson.closingActivity}
                onChange={handleInputChange}></input>
            </Box>
            <button className="button is-link" onClick={handleFormSubmit}>
              <Link to="/profile">Submit</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Update;



