<>
  <form>
    <Navbar />
    <div className="container has-text-left test">
      <div className="columns">
        <div className="column is-12">
          <div className="field">
            <label className="label">Teacher Name</label>
            <div className="control pt-8">
              <input
                value={
                  globalState.user.firstName + " " + globalState.user.lastName
                }
                className="input"
                type="text"
                name="teacherName"
                placeholder="Text input"
                onChange={handleInputChange}
                readOnly
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Lesson Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="lessonName"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
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
          <div className="field">
            <label className="label">Course</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="course"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Grade Level</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="gradeLevel"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Concepts</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="concepts"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Standards</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="standards"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Skills</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="skills"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Objectives</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="objectives"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Materials</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="materials"
                placeholder="Text input"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Goal</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                name="goal"
                onChange={handleInputChange}></textarea>
            </div>
          </div>
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
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">
            <Link to="/profile">Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  </form>
</>;
