import axios from "axios";

export default {
  saveLesson: function (lessonData) {
    return axios.post("/api/lessons", lessonData);
  },
  getLessons: function () {
    return axios.get("/api/lessons");
    },
  
  getLesson: function (id) {
    return axios.get("/api/lessons" + id);
    },
};
  
  
  