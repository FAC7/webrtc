require('env2')('config.env')
import redisFunctions from '../redis/redisFunctions.js'

import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

export default {
  method: ['GET', 'POST'],
  path: '/auth/{mode}/{usertype}',
  config: {
    auth: 'twitter',
    handler: (request, reply) => {
      let mode = request.params.mode
      let type = request.params.usertype
      console.log(request.params)
      if (request.auth.isAuthenticated) {
        const cred = request.auth.credentials
        // console.log(cred)
        const dataToSend = {
          token: cred.token,
          secret: cred.secret,
          screenName: cred.profile.raw.screen_name
        }
        console.log(dataToSend)
        const jwToken = jwt.sign(dataToSend, JWT_SECRET)
        request.cookieAuth.set({'twitterCookie': jwToken})

        if (mode === 'login') {
          if (type === 'mentor') {
            redisFunctions.getUserData('mentor', dataToSend.screenName)
            reply('stuff')
          } else {
            redisFunctions.getUserData('mentee', dataToSend.screenName)
            reply('things')
          }
        }

        if (mode === 'signup') {
          if (type === 'mentor') {
            console.log('signed up as mentor')
            reply({
              isLoginSuccessful: true,
              isSignedUp: false,
              isMentor: true
            })
          } else {
            console.log('signed up as mentee')
            reply({
              isLoginSuccessful: true,
              isSignedUp: false,
              isMentor: false
            })
          }
        }
      }
    }
  }
}
