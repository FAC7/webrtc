import {getAllUserTypes} from '../../../redis/redisFunctions.js'

export default (client, userType, reply) => {
  getAllUserTypes(client, userType)
  .then((result) => {
    reply({success: true, data: result})
  })
  .catch((err) => {
    reply({success: false, data: err})
  })
}
