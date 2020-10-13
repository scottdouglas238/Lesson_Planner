import React from "react";
import "../css/landingpagestyle.css";


function LessonTile({ children }) {
  return (
    // <div class="tile is-parent test">
    //   <article class="tile is-child box lesson">
    //     <p class="title">Imaginary Numbers</p>
    //     <p class="subtitle">Pre-Calculus</p>
    //   </article>
    // </div>
    <div class="column test">
      <div class="card lesson">
        <header class="card-header">
          <p class="card-header-title">Lesson Plan Name Goes Here</p>
        </header>
        <div class="card-content">
          <div class="content">
            <li>Course</li>
            <li>Grade level</li>          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            View
          </a>
        </footer>
      </div>
    </div>
  );
}
export default LessonTile;
