import React, { useState, useEffect } from "react";
import "../../css/landingpagestyle.css";
import { CardHeader } from "./card";
import API from "../../utils/API";
import "../../css/style.scss";
import { Link } from "react-router-dom";

function LessonTile(props) {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    loadLessons();
  }, []);

  function loadLessons() {
    API.getLessonsbyUser()
      .then((res) => setLessons(res.data))
      .catch((err) => console.log(err));
  }

  function deleteLesson(id){
    API.deleteLesson(id)
      .then(res=>loadLessons())
      .catch(err => console.log(err));
  }
  console.log(lessons);
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
                    <strong>Course :</strong> {lesson.course}
                  </p>
                  <p>
                    <strong>Concepts :</strong> {lesson.concepts}
                  </p>
                  <p>
                    <strong>Grade Level :</strong> {lesson.gradeLevel}
                  </p>
                </div>
              </div>
              <Link to={"/lesson/" + lesson._id}><button className="cardBtn">View</button></Link>
              <Link to={"/lesson/" + lesson._id}><button className="cardBtn">Edit</button></Link>
              <button className="cardBtn" onClick={() => deleteLesson(lesson._id)}>Delete</button>
            </div>
          </>
        </div>
      ))}
    </div>
  );
}
 export default LessonTile;
   
   
      
      
    



