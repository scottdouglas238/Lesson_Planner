import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import Navbar from "../navbar";
import API from "../../utils/API";
import "../../css/landingpagestyle.css"


function Update(props) {
  const [lesson, setLesson] = useState({});
  const id = props.match.params.id;
  console.log(props)
  const [globalState, setGlobalState] = useStoreContext();
console.log(setGlobalState)
console.log(Link)
  useEffect(() => {
    getLesson(id);
  }, []);

  function Redirect() {
    props.history.push("/profile");
  }

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
    API.editLesson({
      _id: id,
      userId: globalState.user.id,
     ...lesson
    })
      .then(Redirect())
      // ^ make this a redirect back to the teacher landing page
      .catch((err) => console.log(err));
  
}
  return (
    <>
      <form>
        <Navbar />
        <div className="container appear">
          {/* beginning of first set of columns */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Teacher Name</label>
                <div className="control pt-8">
                  <input
                    className="input"
                    name="teacherName"
                    value={lesson.teacherName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Lesson Name</label>
                <div className="control">
                  <input
                    className="input"
                    name="lessonName"
                    value={lesson.lessonName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Department</label>
                <div className="control">
                  <div>
                    <input
                      className="input"
                      name="department"
                      value={lesson.department}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Course</label>
                <div className="control">
                  <input
                    className="input"
                    name="course"
                    value={lesson.course}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Grade Level</label>
                <div className="control">
                  <input
                    className="input"
                    name="gradeLevel"
                    value={lesson.gradeLevel}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end of first set of columns */}
          {/* beginning of second set of columns */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Concepts</label>
                <div className="control">
                  <input
                    className="input"
                    name="concepts"
                    value={lesson.concepts}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Standards</label>
                <div className="control">
                  <input
                    className="input"
                    name="standards"
                    value={lesson.standards}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end of second set of columns */}
          {/* beginning of third set of columns */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Skills</label>
                <div className="control">
                  <input
                    className="input"
                    name="skills"
                    value={lesson.skills}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Objectives</label>
                <div className="control">
                  <input
                    className="input"
                    name="objectives"
                    value={lesson.objectives}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end of third set of columns */}
          {/* beginning of fourth set of columns */}
          <div className="columns">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Materials</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="materials"
                    value={lesson.materials}
                    onChange={handleInputChange}></textarea>
                </div>
              </div>
            </div>
            <div className="column is-two-thirds">
              <div className="field">
                <label className="label">Goal</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="goal"
                    value={lesson.goal}
                    onChange={handleInputChange}></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* end of fourth set of columns */}
          <div>
            <div className="field">
              <label className="label">Opening Activity</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="openingActivity"
                  value={lesson.openingActivity}
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Activity</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="activity"
                  value={lesson.activity}
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Assessment</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="assessment"
                  value={lesson.assessment}
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Closing Activity</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="closingActivity"
                  value={lesson.closingActivity}
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
          </div>
          <br></br>
          <button className="cardBtn" onClick={handleFormSubmit}>
            Submit
          </button>
          <button className="cardBtn">
            <Link to="/profile">Cancel</Link>
          </button>
        </div>
        <br></br>
      </form>
    </>
  );
}
export default Update;



