const redisFunction = require('../redis/redisFunctions.js')

export default {
  path: '/auth/signup/mentor',
  method: 'GET',
  handler: (request, reply) => {
    let data = { username: {
       apiId: 'mentor-1',
       age: 105,
       firstName: 'Jackie',
       lastName: 'string',
       gender: 'female',
       profession: 'student',
       topics: ['depression', 'anorexia'],
       aboutme: 'im the best',
       feedback: [{date: 123,
                   mentee: 'sam',
                   content:  'doin well'}],
       timeSpentMentoring: 15,
       previousMentees: ['Sam', 'Owen', 'Virginie'] }
   }
    redisFunction.mentorSignUp(data)
    // redisFunction.mentorSignUp(request.payload)
    reply.redirect('/')
  }
}


apiId: string,
age: num,
firstName: string,
lastName: string,
gender: string,
profession: string,
topics: [strings],
aboutme: string,
feedback: [{date: num,
            mentee: string,
            content: string}],
timeSpentMentoring: num,
previousMentees: [strings] }
}

MenteeNotes: { username: {notes: [{date: num,
                               content: string}],...}
}
