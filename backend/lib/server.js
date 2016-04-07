require('env2')('./config.env')

import Hapi from 'hapi'
const server = new Hapi.Server()
const port = process.env.PORT || 4000

// helper methods
import {handlePlugins, handleStart} from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'
import Bell from 'bell'
import AuthCookie from 'hapi-auth-cookie'

// server routes
import ReactUrls from './routes/ReactUrls.js'
import Images from './routes/Images.js'
import Scripts from './routes/Scripts.js'
import MenteeHomepage from './routes/MenteeHomepage.js'
import Feedback from './routes/Feedback.js'
import MentorLogin from './routes/MentorLogin.js'
import MentorHomepage from './routes/MentorHomepage.js'
import Notes from './routes/Notes.js'

// auth strategies
import { TwitterCookie, TwitterOauth } from './authStrategies/twitterAuthStrategies.js'

const ConnectionSettings = {port, routes: {cors: true}}
const Plugins = [ Inert, Bell, AuthCookie ]
const Routes = [ReactUrls, Images, Scripts, MenteeHomepage, MentorLogin, MentorHomepage, Feedback, Notes]

server.connection(ConnectionSettings)
server.register(Plugins, handlePlugins)
server.auth.strategy('twitter', 'bell', TwitterOauth)
server.auth.strategy('session', 'cookie', TwitterCookie)
server.route(Routes)
server.start(handleStart)

export default server
