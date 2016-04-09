import {setUserProfile} from '../../../redis/redisFunctions.js'
import ipcAddUser from '../../../redis/ipcAddUser.js'

export default (client, userType, username, payload, reply) => {
  ipcAddUser(username, payload.firstName + payload.lastName)
    .then((result) => {
      payload.apiId = result.newUserData.uname
      payload.apiPassword = result.newUserData.password
      return setUserProfile(client, userType, username, payload)
    })
    .then(() => {
      reply({success: true, data: payload})
    })
    .catch((err) => {
      reply({success: false, data: err})
    })
}
