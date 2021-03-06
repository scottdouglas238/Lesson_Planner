import React, { useState, useEffect } from "react";
import "../../css/landingpagestyle.css";
import { CardHeader } from "./card";
import API from "../../utils/API";
import "../../css/style.scss";
import { Link } from "react-router-dom";

function DepartmentTile(props) {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        loadLessons();
    }, []);

    function loadLessons() {
        API.getLessonsbyDepartment()
            .then((res) => setLessons(res.data))
            .catch((err) => console.log(err));
    }
    return (
      <div className="cards">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="tile is-parent">
            <>
              <div className="tile is-child card lesson testcard zoom">
                <CardHeader key={lesson._id}>{lesson.lessonName}</CardHeader>
                <div className="card-content">
                  <div className="content textDivit">
                    <p>
                      <strong>Teacher: </strong> {lesson.teacherName}
                    </p>
                    <p>
                      <strong>Course: </strong> {lesson.course}
                    </p>
                    <p>
                      <strong>Grade Level :</strong> {lesson.gradeLevel}
                    </p>
                  </div>
                </div>
                <Link to={"/lesson/" + lesson._id}>
                  <button className="cardBtnAlt">View</button>
                </Link>
              </div>
            </>
          </div>
        ))}
      </div>
    );
}
export default DepartmentTile;