import axios from "axios";


export default {
newLessonPlan: function(lessonData) {
    return axios.post("/api/lessons", lessonData);
},

getLesson: function(id) {
    return axios.get("/api/lesson" + id)
}

};