import {setUserProfile} from '../../../redis/redisFunctions.js'

export default (client, userType, username, payload, reply) => {
  setUserProfile(client, userType, username, payload)
  .then((result) => {
    reply({success: true, data: result})
  })
  .catch((err) => {
    reply({success: false, data: err})
  })
}
