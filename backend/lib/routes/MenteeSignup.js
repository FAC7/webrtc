const redisFunction = require('../redis/redisFunctions.js')

export default {
  path: '/auth/signup/mentee',
  method: 'GET',
  handler: (request, reply) => {
    const data = {RobStaIIion: {
      apiId: 'mentor-1',
      age: 105,
      firstName: 'Jackie',
      lastName: 'string',
      gender: 'female',
      aboutme: 'im the best'
    }
   }
    redisFunction.menteeSignUp(data)
    // redisFunction.mentorSignUp(request.payload)
    reply.redirect('/')
  }
}
