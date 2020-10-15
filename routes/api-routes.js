const db = require("../models/user");
const dbLesson = require("../models/Lesson")
// const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport")

module.exports = function(app){
    app.post("/login", passport.authenticate("local"), function (req, res) {
        res.json({
          message: { email: req.user.email },
        });
      });

      app.post("/signup", (req, res) =>{
        db.create(req.body)
        .then(dbUser =>{
          res.json(dbUser);
        })
     })  

     app.post("/lesson", (req, res) => {
      const lesson = new dbLesson(req.body);
      dbLesson.create(lesson).then((dbLesson) => {
        res.json(dbLesson);
      });
    });

    app.get("/api/lessons", (req, res) => {
      dbLesson.find({})
        .then((dbLesson) => {
          res.json(dbLesson);
        })
        .catch((err) => {
          res.json(err);
        });
    });
  
    app.get("/lesson/:id", (req, res) => {
      dbLesson.findById(req.params.id)
        .then((dbLesson) => {
          res.json(dbLesson);
        })
        .catch((err) => {
          res.json(err);
        });
    });
}
