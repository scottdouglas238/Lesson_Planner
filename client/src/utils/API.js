import axios from "axios";


export default {
  saveLesson: function (lessonData) {
    return axios.post("/lesson", lessonData);
},

getLesson: function(id) {
    return axios.get("/lesson/" + id);
  },

getLessons: function() {
    return axios.get("/api/lessons")
},

getLessonsbyUser: function() {
  return axios.get("/getLessonbyUser")
},

getLessonsbyDepartment: function() {
  return axios.get("/lessons/:department")
},

editLesson: function(lesson) {
  return axios.put("/updateLesson", lesson)
},

deleteLesson: function(id) {
  return axios.delete("/deleteLesson/" + id)
}

};
