const redisFunction = require('../redis/redisFunctions.js')

export default {
  path: '/auth/signup/mentor',
  method: 'GET',
  handler: (request, reply) => {
    let data = { 'RobStaIIion': {
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
                 content: 'doin well'}],
      timeSpentMentoring: 15,
      previousMentees: ['Sam', 'Owen', 'Virginie'] }
   }
    redisFunction.mentorSignUp(data)
    // redisFunction.mentorSignUp(request.payload)
    reply.redirect('/')
  }
}
