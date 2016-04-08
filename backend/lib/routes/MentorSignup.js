const redisFunction = require('../redis/redisFunctions.js')

export default {
  path: '/auth/signup/mentor',
  method: 'GET',
  handler: (request, reply) => {
    const data = {
      mentorUsername: 'SuperJackie',
      name: 'Jackie',
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
