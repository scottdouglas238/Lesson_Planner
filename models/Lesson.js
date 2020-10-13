const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonSchema = new Schema({

    teacherName: {
        type: String,
    },
    lessonName: {
        type: String,
    },
    department: {
        type: String,
    },
    course: {
        type: String,
    },
    gradeLevel: {
        type: String,
    },
    concepts: {
        type: String,
    },
    standards: {
        type: String,
    },
    skills: {
        type: String,
    },
    objectives: {
        type: String,
    },
    materials: {
        type: String,
    },
    goal: {
        type: String,
    },
    openingActivity: {
        type: String,
    },
    activity: {
        type: String,
    },
    assessment: {
        type: String,
    },
    closingActivity: {
        type: String,
    },

  })

  const LessonModel = mongoose.model("Lesson", LessonSchema);

  module.exports = LessonModel;