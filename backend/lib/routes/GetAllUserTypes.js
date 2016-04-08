import {getAllUserTypes} from '../redis/redisFunctions.js'
import client from '../redis/client.js'

export default {
  path: '/api/profile/{userType}',
  method: 'GET',
  handler: (request, reply) => {
    const userType = request.params.userType
    getAllUserTypes(client, userType)
      .then((data) => {
        return reply(data)
      })
  }
}
