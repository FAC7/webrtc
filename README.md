# A secure platform for connecting volunteer mentors and mentees

## Mentees user stories

#### As a mentee I want to...

log in quickly and anonymously

view each mentor profile with the following information:
* Age/gender
* Qualifications/skills
* Specialities

be able to chat:
* securely with my mentor
* anonymously and have my camera disabled

be able to choose my mentor

be able to give feedback to my mentor

be able to choose the same mentor so that I can build up a relationship with them

#### As a mentor I want to...

be able to see my mentees needs

be able to see if they are online

have my mentoring time logged and displayed on my profile

be able to take notes on my mentee

be able to recieve feedback from my mentee

see information about my mentee

#### Stretch goals

* Panic button
* Shedule

## FEATURES & ROLES
#### MENTOR PROFILE
Each mentor should have a profile, including:
**!!*TBD which ones to keep*!!**
* Availability Status
* Resources Button
* Report Conversation Button
* Notes Modal
* Notes History
* Chat History / logs
* Modal for feedback
* Pre-chat Modal

**Team**:
* Owen
* Andrew
* Ellie
* Tasnim

#### VIDEO-CHAT
Implementing IPCortex's web-rtc API to provide:
* video-calls, audio-calls & chats between mentors and mentees
* security info message
* toggle chat feature
* get help now button
* create profile / login buttons

**Team**:
* Mireia
* Jack M
* Francesco
* Jack T

##### DATA(BASE & STRUCTURE)
This should include uploading fake user activity (profiles in db)
**Team**:
* Sam
* Rob
* Katherine
* Virginie

#### CODE REVIEWERS
**Team**:
* Elias
* Ivan

--------------------------
-------------------------
## ORIGINAL REQUIREMENTS
Broad requirements:
+ Matching: Some way of matching potential mentors and mentees.
+ Scheduling: some way of scheduling meeting times.
+ Pre-chat Information gathering: Some way for mentees to record their state of mind before the mentoring session.
+ Video chat: Two-way real-time video/audio calling
+ Feedback: Some way for participants to leave feedback about a session
+ Logging: The length of each call should be recorded, so that the total number of mentoring hours can be known to administrators.
+ Reminders: some way of reminding participants of upcoming mentoring sessions and to allow them to confirm.

Do not attempt to deliver the entire platform, but think of what is going to be make a good MVP.

The client has indicated that if they like the prototype, then funding will be made available to build the entire platform. They are very keen on something that could be repurposed for more than one volunteer mentoring project.

Comments from the client:

*I really like the idea of having an online resource for people to use and I think it will suit the age demographic of who we're likely going to be extending this too. I'm not sure how much you are aware, but if we go ahead with a mentoring project of sorts we will need a separate space for mentors, mentees and others accessing the online tool.*

*Would it be possible to set-up a kind of one-way system and teaching module (should only be brief) to those who wish to become mentors? The idea being that they sign in, learn they training, practice with one another, and then open it up to mentees? It would also be helpful to have a permanent link to some ground rules, or reminders about what each other's role is, and possible suggestions about what to talk about.*

*Anonymity is going to be very important so I think it should limit the available contact information available (no last names, emails, phones etc available to others). I really like the idea of a one-way video call for those who might be nervous about talking online. It might also be helpful for us to ask users of the WebRTC to provide a brief profile of themselves (remain private to everyone else) but allow us to match mentors/mentees.*

*We would also require a process of matching between mentors and mentees to see if they are right for one another and agree to begin mentor/mentee relational working. Would there be enough resource to host a large video conferencing call, or would you advise us to arrange to have this offline? Usually, mentoring builds up a relationship over the year, but this website resource allows a mentee signing in to potentially have access to several mentors - a gain in convenience but a loss in familiarity - this may need consideration. We could say to a mentee that their usual mentor is not available, but if they would like they could talk to someone else.*

*We are still determining what the duration would be for this, and how structured or time-limited it would be, as well as what the intended goals/outcomes are. Is there a way to provide surveys through the platform, maybe even a short 5 questions after each mentor/mentee contact? And if this is too excessive, then beginning, middle and end of the project? This will be useful for us to determine how effective something like this is.*

*Lastly, will there be a way to log their time on WebRTC and their activity - such as this mentor/mentee has spent 50 hours on video calls, or replied to 20 messages? This could help in building up a profile for the individual if we are to incentivise their participation - the idea of aiming for bronze, silver or gold awards based on their input? Keeping this train of thought, would we be reminding people via emails or notifications to check back and log in regularly (obviously giving them the option to switch this off should they wish).*

...

*Just looking at existing apps and I came across two that have interesting features: http://www.mindofmyown.org.uk and http://braininhand.co.uk/who-we-help/individuals-parents-carers/*

*MOMO offers very secure communication and I thought the platform with usage analytics might be useful for the service? Brain In Hand offers a traffic light system where a red light will trigger a call from the National Autistic Society, along with the obligatory coping strategies of course. I wonder if this proactive approach might work as both a deterrent to use but also a risk response? And obviously not sure who would be most appropriate to place the call.*

*From my own research there seems to be some benefit to providing a diary type function where issues for discussion can be uploaded in advance of meetings, this could help both mentor and mentee in preparing.*

*Supplement to waiting list good idea but does this limit length of mentoring relationship or would it be appropriate to continue through CAMHS process? Might it be useful for the transition to adult services? And how much oversight would be needed/offered by the service?*
