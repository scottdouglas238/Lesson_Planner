const db = require("../models/user");
const dbLesson = require("../models/Lesson");
// const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport");
module.exports = function (app) {
  //Authinticate the user
  app.post("/login", passport.authenticate("local"), function (req, res) {
    res.json({
      message: { id: req.user.id, email: req.user.email, department: req.user.department, firstName: req.user.firstName, lastName: req.user.lastName},
    });
  });
  //will be able to add a user/teacher
  app.post("/signup", (req, res) => {
    db.findOne({email: req.body.email}, (err, doc) =>{
      if(err) throw err;
      if(doc){ console.log("User Already Exists")};
      if(!doc){
        db.create(req.body).then((dbUser) => {
          res.json(dbUser);
        })
        .catch((err) =>{
          console.log(err)
        })
      }
    })
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
  app.get("/getLessonbyUser", (req, res) => {
    dbLesson.find({ userId: req.user._id })
      .then((dbLesson) => {
        console.log(dbLesson)
        res.json(dbLesson);
      })
  })
  //the user will be able to delete their own lessons
  app.delete("/deleteLesson/:id", (req, res) => {
    dbLesson.findByIdAndDelete({ _id: req.params.id })
      .then((dbLesson) => {
        res.json(dbLesson)
      })
  })
  //the user will be able to view lessons in their own department  
  app.get("/lessons/:department", (req, res) => {
    dbLesson.find({ department: req.user.department })
      .then((dbLesson) => {
        res.json(dbLesson)
      })
  })

  app.put("/updateLesson", (req, res) => {
    dbLesson.findByIdAndUpdate(

      { _id: req.body._id },
      {
        userID: req.body.userID,
        teacherName: req.body.teacherName,
        lessonName: req.body.lessonName,
        department: req.body.department,
        course: req.body.course,
        gradeLevel: req.body.gradeLevel,
        concepts: req.body.concepts,
        standards: req.body.standards,
        skills: req.body.skills,
        objectives: req.body.objectives,
        materials: req.body.materials,
        goal: req.body.goal,
        openingActivity: req.body.openingActivity,
        activity: req.body.activity,
        assessment: req.body.assessment,
        closingActivity: req.body.closingActivity,
      })
      .then((dbLesson) => {
        res.json(dbLesson)
      })
  })

};
