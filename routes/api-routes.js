const db = require("../models/user");
const dbLesson = require("../models/Lesson");
// const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport");
module.exports = function(app) {
  //Authinticate the user
  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.json({
      message: { id: req.user.id, email: req.user.email },
    });
  });
  //will be able to add a user/teacher
  app.post("/signup", (req, res) => {
    db.create(req.body).then((dbUser) => {
      res.json(dbUser);
    });
  });
  //create a lesson
  app.post("/lesson", (req, res) => {
    const lesson = new dbLesson(req.body);
    dbLesson.create(lesson).then((dbLesson) => {
      res.json(dbLesson);
    });
  });
  //find all lessons
  app.get("/api/lessons", (req, res) => {
    dbLesson
      .find({})
      .then((dbLesson) => {
        res.json(dbLesson);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //view a specific lesson by its id
  app.get("/lesson/:id", (req, res) => {
    dbLesson
      .findById(req.params.id)
      .then((dbLesson) => {
        res.json(dbLesson);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //the user can view just their own lesson plans
  app.get("/getLessonbyUser", (req, res) =>{
    dbLesson.find({userId: req.user._id})
    .then((dbLesson) => {
      console.log(dbLesson)
      res.json(dbLesson);
    })
    // dbLesson.where(req.params.userId).equals(db.where(req.params.id))
    // .then((dbLesson) => {
    //   res.json(dbLesson);
    // })
  })
};
