import axios from "axios";


export default {
  saveLesson: function (lessonData) {
    return axios.post("/api/lessons", lessonData);
},

getLesson: function(id) {
    return axios.get("/api/lesson/" + id);
  },

getLessons: function() {
    return axios.get("/api/lessons")
}

};
