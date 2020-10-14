import axios from "axios";

export default {
saveLesson: function(lessonData) {
    return axios.post("/api/lessons", lessonData);
}

};