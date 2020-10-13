const db = require("../models/Lesson.js");
const auth = require("./../routes/auth");

module.exports = function(app){

    app.use("/api/auth", auth);
    app.get("/", (req, res)=> res.send("Logged In."));

    app.post("/api/lessons", (req, res)=>{
       const lesson = new db(req.body);
       db.create(lesson).then(dbLesson=>{res.json(dbLesson)}); 
    })

    app.get("/api/lessons", (req, res)=>{
       db.find({}).then(dbLesson => {
           res.json(dbLesson)
       })
       .catch(err => {
           res.json(err);
       }) 
    })
}
