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
    console.log(lessons);
    return (
        <div className="cards">
            {lessons.map((lesson) => (
                <div key={lesson._id} className="tile is-parent">
                    <>
                        <div className="tile is-child card lesson testcard">
                            <CardHeader key={lesson._id}>{lesson.lessonName}</CardHeader>
                            <div className="card-content">
                                <div className="content">
                                    <p>
                                        <strong>Teacher: </strong> {lesson.teacherName}
                                    </p>
                                    <p>
                                        <strong>Course: </strong> {lesson.course}
                                    </p>
                                </div>
                            </div>
                            <Link to={"/lesson/" + lesson._id}>
                                View
                            </Link>
                        </div>
                    </>
                </div>
            ))}
        </div>
    );
}
export default DepartmentTile;