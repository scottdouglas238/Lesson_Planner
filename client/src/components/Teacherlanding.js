import React, { Component, useState } from "react";
import "../css/landingpagestyle.css";
import Navbar from "./navbar.js";
import LessonPlanButton from "./newLessonPlanbutton"
function TeacherLanding() {
  return (
    <>
       {/* <nav class="navbar bk">
        <div class="container">
            <div class="navbar-brand">
                <p class="navbar-item has-text-white is-size-3" href="../index.html">
                    L-Plan
                </p>
            </div>

        </div>
    </nav> */}
      <Navbar/>
    {/* <!-- END NAV --> */}
    <div class="container">
        <LessonPlanButton/>
        <div class="columns">
            <div class="column is-12">
                <section class="info-tiles pt-4">
                    {/* <!-- your lesson plans --> */}
                    <div class="columns is-mobile">
                        <div class="column is-one-quarter is-size-4">
                            <p class="plans">Your Lesson Plans</p>
                        </div>
                        <div class="column is-one-quarter">

                        </div>
                        <div class="column is-one-quarter">

                        </div>
                        <div class="column is-one-quarter has-text-right is-size-5">
                            <a>View all</a>
                        </div>

                    </div>

                    {/* <!-- your lesson plans --> */}
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box lesson test">
                                <p class="title">Exponents</p>
                                <p class="subtitle">Algebra</p>
                            </article>
                        </div>
                        <div class="tile is-parent ">
                            <article class="tile is-child box lesson test2">
                                <p class="title">Polynomials</p>
                                <p class="subtitle">Algebra</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box lesson test3">
                                <p class="title">Integers</p>
                                <p class="subtitle">Pre-Algebra</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box lesson test4">
                                <p class="title">Probability</p>
                                <p class="subtitle">Pre-Algebra</p>
                            </article>
                        </div>
                    </div>
                </section>
                {/* <!-- your lesson plans -->

                <!-- department lesson plans --> */}
                <section class="info-tiles pt-6">
                    <div class="columns is-mobile">
                        <div class="column is-one-quarter is-size-4">
                            <p class="plans">Department Lesson Plans</p>
                        </div>
                        <div class="column is-one-quarter">

                        </div>
                        <div class="column is-one-quarter">

                        </div>
                        <div class="column is-one-quarter has-text-right is-size-5">
                            <a>View all</a>
                        </div>

                    </div>

                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent test">
                            <article class="tile is-child box lesson">
                                <p class="title">Imaginary Numbers</p>
                                <p class="subtitle">Pre-Calculus</p>
                            </article>
                        </div>
                        <div class="tile is-parent test2">
                            <article class="tile is-child box lesson">
                                <p class="title">Estimating Derivatives</p>
                                <p class="subtitle">Calculus</p>
                            </article>
                        </div>
                        <div class="tile is-parent test3">
                            <article class="tile is-child box lesson">
                                <p class="title">Complex Numbers</p>
                                <p class="subtitle">Pre-Calculus</p>
                            </article>
                        </div>
                        <div class="tile is-parent test4">
                            <article class="tile is-child box lesson">
                                <p class="title">Right Triangles</p>
                                <p class="subtitle">Geometry</p>
                            </article>
                        </div>
                    </div>
                </section>
                {/* <!-- department lesson plans --> */}
            </div>
        </div>
    </div>
    

      
    </>
  );
}
export default TeacherLanding;