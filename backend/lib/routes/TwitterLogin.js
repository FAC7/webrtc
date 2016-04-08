require('env2')('config.env')
import {getUserData} from '../redis/redisFunctions.js'

import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

export default {
  method: ['GET', 'POST'],
  path: '/auth/{mode}/{usertype}',
  config: {
    auth: 'twitter',
    handler: (request, reply) => {
      const mode = request.params.mode
      const type = request.params.usertype
      if (request.auth.isAuthenticated) {
        const cred = request.auth.credentials
        const dataToSend = {
          token: cred.token,
          secret: cred.secret,
          screenName: cred.profile.raw.screen_name
        }
        const jwToken = jwt.sign(dataToSend, JWT_SECRET)
        request.cookieAuth.set({twitterCookie: jwToken})
        // request.cookieAuth.set({test: 'ivan'})


        if (mode === 'login') {
          if (type === 'mentor') {
            getUserData('mentors', dataToSend.screenName, (data) => {
              reply(data)
            })
          } else {
            getUserData('mentees', dataToSend.screenName, (data) => {
              reply(data)
            })
          }
        }

        if (mode === 'signup') {
          if (type === 'mentor') {
            console.log('signed up as mentor')
            var response = JSON.stringify(reply)
            reply(response)
            // reply.redirect('/')
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
