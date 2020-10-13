import axios from "axios";

export default {
newLessonPlan: function(lessonData) {
    return axios.post("/api/lessons", lessonData);
}

};