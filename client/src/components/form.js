import React, { useRef } from "react";
import Navbar from "./navbar.js";
// import API from "../../utils/API"

//import { useStoreContext } from "../../utils/GlobalState";
//import { ADD_POST, LOADING } from "../../utils/actions";
function lessonPlanForm() {
  //   const teacherNameRef = useRef();
  //   const lessonNameRef = useRef();
  //   const departmentRef = useRef();
  //   const courseRef = useRef();
  //   const gradeLevelRef = useRef();
  //   const conceptsRef = useRef();
  //   const standardsRef = useRef();
  //   const skillsRef = useRef();
  //   const objectivesRef = useRef();
  //   const materialsRef = useRef();
  //   const goalRef = useRef();
  //   const openingRef = useRef();
  //   const activityRef = useRef();
  //   const assessmentRef = useRef();
  //   const closingRef = useRef();

  //const [state, dispatch] = useStoreContext();
  //const handleSubmit = e => {
  //e.preventDefault();
  //dispatch({ type: LOADING });
  //API.savePost({
  //teacherName: teacherNameRef.current.value,
  //lessonNameName: lessonNameRef.current.value,
  //department: department.current.value,
  //course: classNameRef.current.value,
  //gradeLevel: gradeLevelRef.current.value,
  //concepts: conceptsRef.current.value,
  //standards: standardsRef.current.value,
  //skills: skillsRef.current.value,
  //objectives: objectivesRef.current.value,
  //materials: materialsRef.current.value,
  //goal: goalRef.current.value,
  //openingActivity: openingRef.current.value,
  //activity: activityRef.current.value,
  //assessment: assessmentRef.current.value,
  //closingActivity: closingRef.current.value,
  //})
  //.then(result => {
  //dispatchEvent({
  //type: ADD_POST,
  //post: result.data
  //});
  // })
  //.catch(err => console.log(err));
  //look at lines 28 and 29 of example and figure out why
  // }
  return (
    <>
      <form onSubmit>
        <Navbar />

        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="field">
                <label className="label">Teacher Name</label>
                <div className="control pt-8">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={teacherNameRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Lesson Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={lessonNameRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Department</label>
                <div className="control">
                  <div className="select">
                    <select
                    //   ref={departmentRef}
                    >
                      <option>Math</option>
                      <option>English</option>
                      <option>Science</option>
                      <option>Philosophy</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Course</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={courseRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Grade Level</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={gradeLevelRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Concepts</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={conceptsRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Standards</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={standardsRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Skills</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={skillsRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Objectives</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={objectivesRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Materials</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Text input"
                    // ref={materialsRef}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Goal</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    //   ref={goalRef}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label">Opening Activity</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    //   ref={openingRef}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label">Activity</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    //   ref={activityRef}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label">Assessment</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    //   ref={assessmentRef}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label">Closing Activity</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    //   ref={closingRef}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default lessonPlanForm;
