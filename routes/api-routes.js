const db = require("../models/Lesson.js");
const auth = require("./../routes/auth");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.use("/api/auth", auth);
 

  app.get("api/landingPage", isAuthenticated, function (req, res) {
    console.log(res);
    res.json({});
  });

  app.post("/api/lessons", (req, res) => {
    const lesson = new db(req.body);
    db.create(lesson).then((dbLesson) => {
      res.json(dbLesson);
    });
  });

  app.get("/api/lessons", (req, res) => {
    db.find({})
      .then((dbLesson) => {
        res.json(dbLesson);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/lesson/:id", (req, res) => {
    db.findById(req.params.id)
      .then((dbLesson) => {
        res.json(dbLesson);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // app.get("/api/lessonPlanView/:_id", (req, res) => {
  //   //   console.log(req);
  //   db.findOne({ _id: req.params._id });
  // });
};
