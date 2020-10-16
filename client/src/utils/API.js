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
  return axios.get("/lessons/:id")
},

getLessonsbyDepartment: function() {
  return axios.get("/lessons/:department")
},

editLesson: function() {
  return axios.put("/lessons/:id")
},

deleteLesson: function() {
  return axios.delete("/lessons/:id")
}

};
