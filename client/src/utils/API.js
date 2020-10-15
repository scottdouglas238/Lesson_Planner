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
}

};
