import {getUserProfile, setUserProfile} from '../../../redis/redisFunctions.js'
import ipcAddUser from '../../../redis/ipcAddUser.js'

export default (client, userType, username, payload, reply) => {
  getUserProfile(client, userType, username)
    .then((result) => {
      if (result) {
        console.log(userType + ' user ' + username + ' already exists')
        reply({success: true, data: result})
      } else {
        console.log(userType + ' user ' + username + ' doesn\'t exists')
        ipcAddUser(username, payload.firstName + payload.lastName)
          .then((_result) => {
            payload.apiId = _result.newUserData.uname
            payload.apiPassword = _result.newUserData.password
      return setUserProfile(client, userType, username, payload)
    })
          .then((_result) => {
            console.log(userType + ' user ' + username + ' added to DB with result: ' + _result)
      reply({success: true, data: payload})
    })
    .catch((err) => {
      reply({success: false, data: err})
    })
}
