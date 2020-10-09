# Lesson_Planner

Matt Bonneville
Scott Douglas
Joe Farrish
R.J. Gassner

Lesson Planner (Placeholder Title)

# Introduction:
Lesson Planner (Placeholder title) is a platform that seeks to aid teachers with one of their most important, and sometimes most frustrating tasks: Lesson Planning! This app will allow teachers to do what they do best: create dynamic lessons for their students, without worrying about conforming to a district’s specific lesson plan format on their own. Teachers will input the necessary information for their lesson plans, and this app will automatically generate a lesson plan that includes all their information, and is formatted to district, county, and/or state required formatting. 


# User Story:
As a school administrator I want a platform that allows for the creation of lesson plans in a standardized format. I also want the ability for teachers to share their lesson plans with other teachers, as well as administrators. 

# Summary:
This app has two different viewpoints: School Administrator, and Teacher. Once logged in, an administrator will be able to view all the lesson plans in the submitted lesson plans in their school. This may be helpful for purposes of teacher evaluation, teacher instruction, or for getting instructions to short notice substitute teachers. Administrators will also be able to create their own lesson plans. They may need to do this for the purpose of school assemblies, staff meetings, or staff professional development. Finally, Administrators will be able to create new staff members. 

Once a teacher is logged in they will be taken to a page that shows all of their lesson plans. They will also be able to click a button and view all lesson plans in their school system, which will help with collaboration, sharing ideas, and covering for other teachers. In addition to this baseline functionality for both Administrator and teacher, we have other ideas to further enhance this application, which will be discussed later on in this document. 

# Technological Outline:
This will be a MERN application. That is to say that the user interface will be rendered in with React, and data (i.e. lesson plans) will be sent to a Mongo database via a node/express server. Other technologies to be used include, but are not limited to the mongoose ORM platform, react-router, and node libraries such as moment and path. A to-be-determined CSS library (such as bootstrap or react-bootstrap) will also be used. 

# Division of Labor:
The team will largely work in two sub-teams. Scott and Joe will focus on the database and server, while Matt and R.J. will focus on React. That being said, we want to be fairly flexible in our approach, and members of one team may be called to assist the other team. We may employ a variety of methods depending on the situation, including assigning specific duties to certain people, and pair coding. The repo will be hosted on Scott’s github account, and all members of the team will code in their own branches, committing often. 

# Timeline:
There are two major deadlines that need to be met with this project. A base level of functionality is required by Wednesday, 10/14/2020. This deadline, to our understanding, is essentially a proof of concept where the most basic functions of the application must work. The final deadline is Monday, 10/19/2020, where the group will present our application. As such, a rudimentary timeline is proposed below: 

End of day 10/09/2020: Initial planning phase complete, plans sent to Tucker for approval. 

End of day 10/11/2020: (Pending approval from Tucker) All members will have their own MVC compliant branches of the repo. Teams will have split and largely completed the necessary research, coding has begun. 

End of day 10/13/Bare minimum functionality will be met, in preparation for the next day’s mini-presentation. Server, Database, and basic React UI will all be completed, paired together, and functional

End of day 10/14 Mini presentation complete, the group will have decided which “nice to have” features will be prioritized

End of day 10/16: Polishing of bare minimum elements will be complete, working on additional features will have begun

End of day 10/18: App will be fully polished, with some new functionality added, in preparation for the next day’s presentation

Going forward, the group may decide to continue to work on and polish this application in preparation for Demo Day, but more information will be needed before this can be planned out. 

# Additional Objectives
The group is maintaining a separate Google doc listing out additional development objectives, and adding to it as they come up. At the time of writing this document, some of them include: 
A more polished UI/UX to assist the users in navigating large numbers of lesson plans (ex: GUI folders) 
Adding an Education Assistant/Instructional Assistant/Classified Staff role
Allowing Teachers to view all lesson plans (regardless of author) by department/subject and/or grade level
Allow for editing and deleting of lesson plans
Allow for the creation of new administrators
As one can see, what starts as just a simple lesson plan generator can (with enough time and resources) be scaled up to facilitate easy sharing across departments, grade levels, schools within a district, and perhaps even beyond. 


# Conclusion
Teachers today face more challenges than ever before, and these challenges have only been compounded by the current global health crisis. Teachers play a vital role in our society, yet far too many of them are not being given the support they need, and far too many great teachers end up leaving the profession, creating teacher shortages, and resulting in the standards teachers are held to being lowered. While this application will in no way solve all of the issues facing teachers, our hope is that in some small way, this application will allow those who nurture future generations to find at least one small part of their job a bit easier. 
