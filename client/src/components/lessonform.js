import React, { useRef }  from "react";
//import { useStoreContext } from "../../utils/GlobalState";
//import { ADD_POST, LOADING } from "../../utils/actions";
//import API from "../../utils/API"



function lessonPlanForm() {
    const teacherNameRef = useRef();
    const lessonNameRef = useRef();
    const departmentRef = useRef();
    const classRef = useRef();
    const gradeLevelRef = useRef();
    const conceptsRef = useRef();
    const standardsRef = useRef();
    const skillsRef = useRef();
    const objectivesRef = useRef();
    const materialsRef = useRef();
    const goalRef = useRef();
    const openingRef = useRef();
    const activityRef = useRef();
    const assessmentRef = useRef();
    const closingRef = useRef();
    //const [state, dispatch] = useStoreContext();

    //const handleSubmit = e => {
        //e.preventDefault();
        //dispatch({ type: LOADING });
        //API.savePost({
            //teacherName: teacherNameRef.current.value,
            //lessonNameName: lessonNameRef.current.value,
            //department: department.current.value,
            //course: classRef.current.value,
            //gradeLevel: gradeLevelRef.current.value,
            //concepts: conceptsRef.current.value,
            //standards: standardsRef.current.value,
            //skills: skillsRef.current.value,
            //objectives: objectivesRef.current.value,
            //materials: materialsRef.current.value,
            //goal: goalRef.current.value,
            //openingActivity: openingRef.current.value,
            //activity: activityRef.current.value,
            //assessment: assessmentRef.current.value,
            //closingActivity: closingRef.current.value,
        //})
        //.then(result => {
            //dispatchEvent({
                //type: ADD_POST,
                //post: result.data
            //});
       // })
       //.catch(err => console.log(err));
        //look at lines 28 and 29 of example and figure out why
   // }

   return (
       <div>

       </div>
   )

}

export default lessonPlanForm;