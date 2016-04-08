import { getAllUserTypes } from '../redis/redisFunctions.js'
import client from '../redis/client.js'

export default {
  path: '/api/profile/{userType}',
  method: 'GET',
  handler: (request, reply) => {
    let userType = request.params.userType
    console.log('ùklghjfhdgkuhgh>>>>>', request.params.userType)
    getAllUserTypes(client, userType)
      .then((data) => {
        console.log(data);
        return reply(data)
      })
  }
}
