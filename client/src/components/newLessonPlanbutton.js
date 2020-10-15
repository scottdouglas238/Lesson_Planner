import React from "react";
import { Link } from "react-router-dom";

function LessonPlanButton() {
  return (
    <button
      className="mt-4 button is-success is-inverted is-outlined is-inline-flex has-text-weight-bold">
      <Link to="/newLessonPlan">Create new lesson plan</Link>
    </button>
  );
}
export default LessonPlanButton;
