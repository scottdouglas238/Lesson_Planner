import React, { useState, useEffect } from "react";
import "../css/landingpagestyle.css";
import { CardHeader, CardBody, CardFooter } from "./card";
import API from "../utils/API";
import "../css/style.scss";


function LessonTile(props) {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    loadLessons();
  }, []);

  function loadLessons() {
    API.getLessons()
      .then((res) => setLessons(res.data))
      .catch((err) => console.log(err));
  }
  console.log(lessons);
  return (
    <div class="cards">
      {lessons.map((lesson) => (
        <div class="tile is-parent">
          <>
            <div class="tile is-child card lesson">
              <CardHeader key={lesson._id}>{lesson.lessonName}</CardHeader>
              <div class="card-content">
                <div class="content">
                  <p>
                    <strong>Teacher :</strong> {lesson.teacherName}
                  </p>
                  <p>
                    <strong>Department :</strong> {lesson.department}
                  </p>
                </div>
              </div>
              <CardFooter>{lesson.course}View</CardFooter>
            </div>
          </>
        </div>
      ))}
    </div>
  );
 }
 export default LessonTile;
   
   
      
      
    



