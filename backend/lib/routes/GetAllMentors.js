const redisFunction = require('../redis/redisFunctions.js')

export default {
  path: '/getAllMentors',
  method: 'GET',
  handler: (request, reply) => {
    redisFunction.getAllMentors((mentorArray) => {
      return reply(mentorArray)
    })
  }
}
