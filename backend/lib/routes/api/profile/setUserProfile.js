import {getUserProfile, setUserProfile} from '../../../redis/redisFunctions.js'
import ipcAddUser from '../../../redis/ipcAddUser.js'

export default (client, userType, username, payload, reply) => {
  getUserProfile(client, userType, username)
    .then((result) => {
      if (result && Object.keys(result).length > 0) {
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
            console.log('IPC/DB error has occurred: ', err)
            reply({success: false, data: 'IPC/DB error', error: err})
          })
      }
    })
    .catch((err) => {
      console.log('DB error has occurred: ', err)
      reply({success: false, data: 'DB error', error: err})
    })
}
