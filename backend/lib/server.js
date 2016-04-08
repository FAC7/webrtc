require('env2')('./config.env')

import Hapi from 'hapi'
const server = new Hapi.Server()
const port = process.env.PORT || 4000
import fs from 'fs'

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
import TwitterLogin from './routes/TwitterLogin.js'
import Feedback from './routes/api/feedback/index.js'
import Notes from './routes/api/note/index.js'
import Profile from './routes/api/profile/index.js'

// auth strategies
import {TwitterCookie, TwitterOauth} from './authStrategies/twitterAuthStrategies.js'

const tls = {
  key: fs.readFileSync(`${__dirname}/../../key.pem`),
  cert: fs.readFileSync(`${__dirname}/../../cert.pem`)
}

const ConnectionSettings = {port, routes: {cors: true}, tls}
const Plugins = [Inert, Bell, AuthCookie]
const Routes = [
  ReactUrls,
  Images,
  Scripts,
  TwitterLogin,
  Feedback,
  Notes,
  Profile
]

server.connection(ConnectionSettings)
server.register(Plugins, handlePlugins)
server.auth.strategy('twitter', 'bell', TwitterOauth)
server.auth.strategy('session', 'cookie', TwitterCookie)
server.route(Routes)

export default server
