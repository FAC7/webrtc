import {setUserProfile} from '../redis/redisFunctions.js'
import client from '../redis/client.js'

export default {
  path: '/api/profile/{userType}/{username}',
  method: 'POST',
  handler: (request) => {
    const userType = request.params.userType
    const userName = request.params.userName
    const payload = request.payload
    console.log(userType, userName)
    setUserProfile(client, userType, userName, payload)
  }
}

/*
insertPrechatNotes(client, req.params.menteeName, req.payload)
  .then((success) => {
    reply({success: true, data: success})
  })
  .catch((error) => {
    reply({success: false, data: error})
  })
} else {
reply({success: false, data: 'invalid request type'})
}
*/
