import {
  getUserProfile,
  getAllUserTypes,
  setUserProfile
} from '../../../redis/redisFunctions.js'

export default (client) => {
  return {
    path: '/api/profile/{userType}/{username?}',
    method: ['GET', 'POST'],
    handler: (req, reply) => {
      if (req.params.username) {
        if (req.method.toUpperCase() === 'GET') {
          getUserProfile(client, req.params.userType, req.params.username)
            .then((result) => {
              reply({success: true, data: result})
            })
            .catch((err) => {
              reply({success: false, data: err})
            })
        } else if (req.method.toUpperCase() === 'POST') {
          setUserProfile(client, req.params.userType, req.params.username, req.payload)
            .then((result) => {
              reply({success: true, data: result})
            })
            .catch((err) => {
              reply({success: false, data: err})
            })
        } else {
          reply({success: false, data: 'invalid request method'})
        }
      } else if (req.method.toUpperCase() === 'GET') {
        getAllUserTypes(client, req.params.userType)
          .then((result) => {
            reply({success: true, data: result})
          })
          .catch((err) => {
            reply({success: false, data: err})
          })
      } else {
        reply({success: false, data: 'invalid request method'})
      }
    }
  }
}
