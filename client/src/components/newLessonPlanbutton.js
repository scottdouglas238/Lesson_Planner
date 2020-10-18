import React from "react";
import { Link } from "react-router-dom";
import "../css/style.scss"

function LessonPlanButton() {
  return (
    
      <Link to="/newLessonPlan">
        <button className="Btn cardBtn">Create new lesson plan</button>
      </Link>
   
  );
}
export default LessonPlanButton;
