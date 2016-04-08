require('env2')('./config.env')

import Hapi from 'hapi'
const server = new Hapi.Server()
const port = process.env.PORT || 4000

// helper methods
import {handlePlugins} from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'
import Bell from 'bell'
import AuthCookie from 'hapi-auth-cookie'

// server routes
import ReactUrls from './routes/ReactUrls.js'
import Images from './routes/Images.js'
import Scripts from './routes/Scripts.js'
import MenteeSignup from './routes/MenteeSignup.js'
import Feedback from './routes/Feedback.js'
import TwitterLogin from './routes/TwitterLogin.js'
import MentorHomepage from './routes/MentorHomepage.js'
import MentorSignup from './routes/MentorSignup.js'
import Notes from './routes/Notes.js'
import GetUserProfile from './routes/GetUserProfile.js'
import GetAllMentors from './routes/GetAllMentors.js'

// auth strategies
import {TwitterCookie, TwitterOauth} from './authStrategies/twitterAuthStrategies.js'

const ConnectionSettings = {port, routes: {cors: true}}
const Plugins = [Inert, Bell, AuthCookie]
const Routes = [
  ReactUrls,
  Images,
  Scripts,
  GetAllMentors,
  MenteeSignup,
  TwitterLogin,
  MentorHomepage,
  MentorSignup,
  Feedback,
  Notes,
  GetUserProfile
]

server.connection(ConnectionSettings)
server.register(Plugins, handlePlugins)
server.auth.strategy('twitter', 'bell', TwitterOauth)
server.auth.strategy('session', 'cookie', TwitterCookie)
server.route(Routes)

export default server
