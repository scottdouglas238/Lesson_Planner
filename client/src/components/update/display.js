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

  useEffect(() => {
    getLesson(id);
  }, []);


  function getLesson(id) {
    API.getLesson(id)
      .then((res) => setLesson(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLesson({
      ...lesson,
      [name]: value,
    });
  }



function handleFormSubmit(event) {
  event.preventDefault();
    console.log("asdlfkjasdwelrkjqwe");
    API.editLesson({
      _id: id,
      userId: globalState.user.id,
     ...lesson
    })
      .then(console.log("test"))
      // ^ make this a redirect back to the teacher landing page
      .catch((err) => console.log(err));
  
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
            name="teacherName"
              value={lesson.teacherName}
              onChange={handleInputChange}></input>
            <Label>
              <h5>Lesson Name:</h5>
            </Label>
            <Box>
              <input
              name="lessonName"
                value={lesson.lessonName}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Department:</h5>
            </Label>
            <Box>
              <input
              name="department"
                value={lesson.department}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Course:</h5>
            </Label>
            <Box>
              <input
              name="course"
                value={lesson.course}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Grade Level:</h5>
            </Label>
            <Box>
              <input
              name="gradeLevel"
                value={lesson.gradeLevel}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Concepts:</h5>
            </Label>
            <Box>
              <input
              name="concepts"
                value={lesson.concepts}
                onChange={handleInputChange}></input>
            </Box>

            <Label>
              <h5>Standards:</h5>
            </Label>
            <Box>
              <input
              name="standards"
                value={lesson.standards}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Skills:</h5>
            </Label>
            <Box>
              <input
              name="skills"
                value={lesson.skills}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Objectives:</h5>
            </Label>
            <Box>
              <input
              name="objectives"
                value={lesson.objectives}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Materials:</h5>
            </Label>
            <Box>
              <input
              name="materials"
                value={lesson.materials}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Goal:</h5>
            </Label>
            <Box>
              <input
              name="goal"
                value={lesson.goal}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Opening Activity:</h5>
            </Label>
            <Box>
              <input
              name="openingActivity"
                value={lesson.openingActivity}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Activity:</h5>
            </Label>
            <Box>
              <input
              name="activity"
                value={lesson.activity}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Assessment:</h5>
            </Label>
            <Box>
              <input
              name="assessment"
                value={lesson.assessment}
                onChange={handleInputChange}></input>
            </Box>
            <Label>
              <h5>Closing Acitivity:</h5>
            </Label>
            <Box>
              <input
              name="closingActivity"
                value={lesson.closingActivity}
                onChange={handleInputChange}></input>
            </Box>
            <Link to="/profile">
            <button className="button is-link" onClick={handleFormSubmit}>
            </button></Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default Update;



