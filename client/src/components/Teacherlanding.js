import React, { Component, useState } from "react";
function TeacherLanding() {
  return (
    <>
      <nav class="navbar is-white">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item brand-text" href="../index.html">
              L-Plan
            </a>
            <div class="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start"></div>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <section class="info-tiles pt-6">
              <div class="has-text-left is-size-4">
                <p class="plans ">Your Lesson Plans</p>
              </div>
              <div class="has-text-right is-size-5">
                {" "}
                <a>See all</a>
              </div>
              <div class="tile is-ancestor has-text-centered">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Exponents</p>
                    <p class="subtitle">Algebra</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Polynomials</p>
                    <p class="subtitle">Algebra</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Integers</p>
                    <p class="subtitle">Pre-Algebra</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Probability</p>
                    <p class="subtitle">Pre-Algebra</p>
                  </article>
                </div>
              </div>
            </section>
            <section class="info-tiles pt-6">
              <p class="plans is-size-4">Department Lesson Plans</p>
              <div class="has-text-right is-size-5">
                {" "}
                <a>See all</a>
              </div>
              <div class="tile is-ancestor has-text-centered">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Imaginary Numbers</p>
                    <p class="subtitle">Pre-Calculus</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Estimating Derivatives</p>
                    <p class="subtitle">Calculus</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Complex Numbers</p>
                    <p class="subtitle">Pre-Calculus</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Right Triangles</p>
                    <p class="subtitle">Geometry</p>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default TeacherLanding;