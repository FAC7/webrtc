const redisFunction = require('../redis/redisFunctions.js')

export default {
  path: '/mentor-signup',
  method: 'GET',
  handler: (request, reply) => {
    const data = {
      mentorUsername: 'SuperJackie',
      name: 'Jackie',
      age: 105,
      gender: 'male',
      specialities: ['depression', 'anorexia'],
      background: 'student of psychology',
      availabile: true
    }
    console.log(request.payload)
    redisFunction.mentorSignUp(data)
    // redisFunction.mentorSignUp(request.payload)
    reply.redirect('/')
  }
}
