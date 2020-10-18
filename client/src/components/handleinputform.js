import React, { useState } from "react";
import API from "../utils/API";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import '../css/style.scss'
import '../css/landingpagestyle.css'

function LessonPlanForm({history}) {
  const [globalState, setGlobalState] = useStoreContext();
  const [formObject, setFormObject] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({
      ...formObject,
      [name]: value,
    });
  }
  console.log(setGlobalState)
  function Redirect() {
    history.push("/profile")
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(globalState.user.id);
    API.saveLesson({
      userId: globalState.user.id,
      teacherName: globalState.user.firstName + " " + globalState.user.lastName,
      lessonName: formObject.lessonName,
      department: globalState.user.department,
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
                    value={
                      globalState.user.firstName +
                      " " +
                      globalState.user.lastName
                    }
                    className="input"
                    type="text"
                    name="teacherName"
                    onChange={handleInputChange}
                    readOnly
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
                    type="text"
                    name="lessonName"
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
                      name="department"
                      className="input"
                      value={globalState.user.department}
                      onChange={handleInputChange}></input>
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
                    type="text"
                    name="course"
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
                    type="text"
                    name="gradeLevel"
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
                    type="text"
                    name="concepts"
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
                    type="text"
                    name="standards"
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
                    type="text"
                    name="skills"
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
                    type="text"
                    name="objectives"
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
                    type="text"
                    name="materials"
                    placeholder=""
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
                    placeholder=""
                    name="goal"
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
                  placeholder="Textarea"
                  name="openingActivity"
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Activity</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  name="activity"
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Assessment</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  name="assessment"
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Closing Activity</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  name="closingActivity"
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
export default LessonPlanForm;
