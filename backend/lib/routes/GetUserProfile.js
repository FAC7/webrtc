import {getUserProfile} from '../redis/redisFunctions.js'
import client from '../redis/client.js'

export default {
  path: '/api/profile/{userType}/{username}',
  method: 'GET',
  handler: (request, reply) => {
    const userType = request.params.userType
    const userName = request.params.username
    console.log(request.params.userType, request.params.username)
    // return reply({success: false, data: 'invalid payload'})
    getUserProfile(client, userType, userName)
      .then((data) => {
        return reply(data)
      })
  }
}