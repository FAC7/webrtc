import jwt from 'jsonwebtoken'
// import {getUserData} from '../redis/redisFunctions.js'

export default client => ({
  method: ['GET', 'POST'],
  path: '/auth/{mode}/{usertype}',
  config: {
    auth: 'twitter',
    handler: (request, reply) => {
      console.log(client)
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
            // getUserData('mentors', dataToSend.screenName, (data) => {
            //   reply(data)
            // })
            reply.redirect('/mentor-dashboard/#' + username)
          } else {
            // getUserData('mentees', dataToSend.screenName, (data) => {
            //   reply(data)
            // })
            reply.redirect('/mentee-dashboard/#' + username)
          }
        }

        if (mode === 'signup') {
          if (type === 'mentor') {
            console.log('signed up as mentor')
            // should redirect to mentor signup when it's complete
            reply.redirect('/mentor-signup')
          } else {
            console.log('signed up as mentee')
            // should redirect to mentee signup when it's complete
            reply.redirect('/mentee-signup')
          }
        }
      }
    }
  }
})
