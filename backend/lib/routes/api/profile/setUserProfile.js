import {getUserProfile, setUserProfile} from '../../../redis/redisFunctions.js'
import ipcAddUser from '../../../redis/ipcAddUser.js'

export default (client, userType, username, payload, reply) => {
  getUserProfile(client, userType, username)
    .then((result) => {
      if (result) {
        reply({success: true, data: result})
      } else {
        ipcAddUser(username, payload.firstName + payload.lastName)
          .then((_result) => {
            payload.apiId = _result.newUserData.uname
            payload.apiPassword = _result.newUserData.password
      return setUserProfile(client, userType, username, payload)
    })
          .then((_result) => {
      reply({success: true, data: payload})
    })
    .catch((err) => {
      reply({success: false, data: err})
    })
}
