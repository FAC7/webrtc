import jwt from 'jsonwebtoken'
import getUserProfile from '../redis/redisFunctions.js'

export default (client) => ({ // eslint-disable-line
  method: ['GET', 'POST'],
  path: '/auth/{mode}/{usertype}',
  config: {
    auth: 'twitter',
    handler: (request, reply) => {
      const mode = request.params.mode
      const type = request.params.usertype
      if (request.auth.isAuthenticated) {
        const cred = request.auth.credentials
        const username = cred.profile.raw.screen_name
        const dataToSend = {
          token: cred.token,
          secret: cred.secret,
          screenName: username
        }
        const jwToken = jwt.sign(dataToSend, process.env.JWT_SECRET)
        request.cookieAuth.set({twitterCookie: jwToken})

        if (mode === 'login') {
          if (type === 'mentor') {
            reply.redirect('/mentor-dashboard/#' + username)
          } else {
            reply.redirect('/mentee-dashboard/#' + username)
          }
        }

        if (mode === 'signup') {
          if (type === 'mentor') {
            getUserProfile(client, 'mentor', username)
              .then((result) => {
                if (result) {
                  console.log('User ' + username + 'already exists')
                  reply.redirect('/mentor-dashboard/#' + username)
                } else {
                  console.log('User ' + username + ' signed up as mentor')
                  reply.redirect('/mentor-signup/#' + username)
                }
              })

          } else {
            getUserProfile(client, 'mentee', username)
              .then((result) => {
                if (result) {
                  console.log('User ' + username + 'already exists')
                  reply.redirect('/mentee-dashboard/#' + username)
                } else {
                  console.log('User ' + username + ' signed up as mentee')
                  reply.redirect('/mentee-signup/#' + username)
                }
              })
          }
        }
      }
    }
  }
})
