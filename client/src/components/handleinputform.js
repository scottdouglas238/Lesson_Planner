import React, { useState } from "react";
 import API from "../utils/API"
 import Navbar from "./navbar"

function LessonPlanForm() {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.teacherName && formObject.lessonName) {
          API.saveLesson({
            teacherName: formObject.teacherName,
            lessonName: formObject.lessonName,
            department: formObject.department,
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
            closingActivity: formObject.closingActivity
          })
            .then(window.location.href = "/landingpage") 
            // ^ make this a redirect back to the teacher landing page
            .catch(err => console.log(err));
        }
      };



    return (
        <>
            <form onSubmit>
                <Navbar />

                <div class="container">
                    <div class="columns">
                        <div class="column is-12">
                            <div class="field">
                                <label class="label">Teacher Name</label>
                                <div class="control pt-8">
                                    <input
                                        class="input"
                                        type="text"
                                        name="teacherName"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Lesson Name</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        name="lessonName"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Department</label>
                                <div class="control">
                                    <div class="select">
                                        <select
                                            name="department"
                                            onChange={handleInputChange}
                                        >
                                            <option>Math</option>
                                            <option>English</option>
                                            <option>Science</option>
                                            <option>Philosophy</option>
                                            <option>Foreign Language</option>
                                            <option>Visual and Performing Arts</option>
                                            <option>Social Studies</option>
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
                                        name="course"
                                        placeholder="Text input"
                                        onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Grade Level</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        name="gradeLevel"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Concepts</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        name="concepts"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Standards</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        name="standards"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Skills</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        name="skills"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Objectives</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        name="objectives"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Materials</label>
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        name="materials"
                                        placeholder="Text input"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Goal</label>
                                <div class="control">
                                    <textarea
                                        class="textarea"
                                        placeholder="Textarea"
                                        name="goal"
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Opening Activity</label>
                                <div class="control">
                                    <textarea
                                        class="textarea"
                                        placeholder="Textarea"
                                        name="openingActivity"
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Activity</label>
                                <div class="control">
                                    <textarea
                                        class="textarea"
                                        placeholder="Textarea"
                                        name="activity"
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Assessment</label>
                                <div class="control">
                                    <textarea
                                        class="textarea"
                                        placeholder="Textarea"
                                        name="assessment"
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Closing Activity</label>
                                <div class="control">
                                    <textarea
                                        class="textarea"
                                        placeholder="Textarea"
                                        name="closingActivity"
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link" onclick={handleFormSubmit}>Submit</button>
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

export default LessonPlanForm;