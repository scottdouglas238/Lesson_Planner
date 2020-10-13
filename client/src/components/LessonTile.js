import React, { useState, useEffect } from "react";
import "../css/landingpagestyle.css";
import { CardHeader, CardBody, CardFooter } from "./card";
import API from "../utils/API";


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

  return (
    <div class="column test">
      <div class="card lesson">
            {lessons.map(lesson => (
          
          
          <>
                    <CardHeader key={lesson._id}>{lesson.lessonName}</CardHeader>
                <CardBody>{lesson.department}</CardBody>
                    <CardFooter>{lesson.course}</CardFooter>
                              </>
        
        
        ))}
      </div>
    </div>
  );
}
export default LessonTile;
  



