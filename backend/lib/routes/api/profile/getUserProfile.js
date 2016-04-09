import {getUserProfile} from '../../../redis/redisFunctions.js'

export default (client, userType, username, reply) => {
  getUserProfile(client, userType, username)
  .then((result) => {
    reply({success: true, data: result})
  })
  .catch((err) => {
    reply({success: false, data: err})
  })
}
