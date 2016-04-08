const redisFunction = require('../redis/redisFunctions.js')

export default {
  path: '/mentee-signup',
  method: 'GET',
  handler: (request, reply) => {
    let data = {
      menteeUsername: 'Donald',
    }
    console.log(request.payload)
    redisFunction.menteeSignUp(data)
    // redisFunction.mentorSignUp(request.payload)
    reply.redirect('/')
  }
}
