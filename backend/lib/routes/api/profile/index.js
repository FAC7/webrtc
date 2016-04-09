import getUserProfileHandler from './getUserProfile.js'
import getAllUserTypesHandler from './getAllUserTypes.js'
import setUserProfileHandler from './setUserProfile.js'

export default (client) => {
  return {
    path: '/api/profile/{userType}/{username?}',
    method: ['GET', 'POST'],
    handler: (req, reply) => {
      const userType = req.params.userType
      const userName = req.params.userName
      const payload = req.payload
      if (req.params.username) {
        if (req.method.toUpperCase() === 'GET') {
          getUserProfileHandler(client, userType, userName, reply)
        } else if (req.method.toUpperCase() === 'POST') {
          setUserProfileHandler(client, userType, userName, payload, reply)
        } else {
          reply({success: false, data: 'invalid request method'})
        }
      } else if (req.method.toUpperCase() === 'GET') {
        getAllUserTypesHandler(client, userType, reply)
      } else {
        reply({success: false, data: 'invalid request method'})
      }
    }
  }
}
