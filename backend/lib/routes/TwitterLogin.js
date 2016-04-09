import jwt from 'jsonwebtoken'

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
        // request.cookieAuth.set({test: 'ivan'})


        if (mode === 'login') {
          if (type === 'mentor') {
            reply.redirect('/mentor-dashboard/#' + username)
          } else {
            reply.redirect('/mentee-dashboard/#' + username)
          }
        }

        if (mode === 'signup') {
          if (type === 'mentor') {
            console.log('signed up as mentor')
            // should redirect to mentor signup when it's complete
            reply.redirect('/mentor-dashboard#wrongplace')
          } else {
            console.log('signed up as mentee')
            // should redirect to mentee signup when it's complete
            reply.redirect('/mentee-dashboard#wrongplace')
          }
        }
      }
    }
  }
})
