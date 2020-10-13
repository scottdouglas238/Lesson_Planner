import React, { Component, useState } from "react";
import "../css/landingpagestyle.css";
import Navbar from "./navbar.js";
import LessonPlanButton from "./newLessonPlanbutton";
import NewTeacherButton from "./newTeacherButton";
import LessonTile from "./LessonTile";
function AdminLanding() {
  return (
    <>
      <Navbar />
      <div class="container">
        <LessonPlanButton />
        <NewTeacherButton />

        <div class="columns">
          <div class="column is-12">
            <section class="info-tiles pt-4">
              {/* <!-- your lesson plans --> */}
              <div class="columns is-mobile">
                <div class="column is-one-quarter is-size-4">
                  <p class="plans">Your Lesson Plans</p>
                </div>
                <div class="column is-one-quarter"></div>
                <div class="column is-one-quarter"></div>
                <div class="column is-one-quarter has-text-right is-size-5">
                  <a>View all</a>
                </div>
              </div>

              {/* <!-- your lesson plans --> */}
              <div class="tile is-ancestor has-text-centered">
                <LessonTile />
                
              </div>
            </section>
            {/* <!-- your lesson plans -->

                <!-- department lesson plans --> */}
            <section class="info-tiles pt-6">
              <div class="columns is-mobile">
                <div class="column is-one-quarter is-size-4">
                  <p class="plans">Department Lesson Plans</p>
                </div>
                <div class="column is-one-quarter"></div>
                <div class="column is-one-quarter"></div>
                <div class="column is-one-quarter has-text-right is-size-5">
                  <a>View all</a>
                </div>
              </div>

              <div class="tile is-ancestor has-text-centered">
                <LessonTile />
                
              </div>
            </section>
            {/* <!-- department lesson plans --> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminLanding;
