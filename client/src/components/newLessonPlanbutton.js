import React from "react";

function LessonPlanButton() {
  return (
    <button
      className="mt-4 button is-success is-inverted is-outlined is-inline-flex has-text-weight-bold"
      onClick={(event) => (window.location.href = "/newLessonPlan")}>
      Create new lesson plan
    </button>
  );
}
export default LessonPlanButton;
