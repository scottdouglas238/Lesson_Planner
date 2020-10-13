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
  //course: classRef.current.value,
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

        <div class="container has-text-left">
          <div class="columns">
            <div class="column is-12">
              <div class="field">
                <label class="label">Teacher Name</label>
                <div class="control pt-8">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={teacherNameRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Lesson Name</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={lessonNameRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Department</label>
                <div class="control">
                  <div class="select">
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

              <div class="field">
                <label class="label">Course</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={courseRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Grade Level</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={gradeLevelRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Concepts</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={conceptsRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Standards</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={standardsRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Skills</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={skillsRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Objectives</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={objectivesRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Materials</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    // ref={materialsRef}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Goal</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    //   ref={goalRef}
                  ></textarea>
                </div>
              </div>
              <div class="field">
                <label class="label">Opening Activity</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    //   ref={openingRef}
                  ></textarea>
                </div>
              </div>
              <div class="field">
                <label class="label">Activity</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    //   ref={activityRef}
                  ></textarea>
                </div>
              </div>
              <div class="field">
                <label class="label">Assessment</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    //   ref={assessmentRef}
                  ></textarea>
                </div>
              </div>
              <div class="field">
                <label class="label">Closing Activity</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    //   ref={closingRef}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default lessonPlanForm;
