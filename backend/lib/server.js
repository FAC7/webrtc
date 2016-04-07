require('env2')('./config.env')

import Hapi from 'hapi'
const server = new Hapi.Server()
const port = process.env.PORT || 4000
import fs from 'fs'

// helper methods
import {handlePlugins, handleStart} from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'

// server routes
import Hello from './routes/Hello.js'
import Images from './routes/Images.js'
import ReactUrls from './routes/ReactUrls.js'
import Scripts from './routes/Scripts.js'

const tls = {
  key: fs.readFileSync(`${__dirname}/../../key.pem`),
  cert: fs.readFileSync(`${__dirname}/../../cert.pem`)
}

const ConnectionSettings = {port, routes: {cors: true}, tls}
const Plugins = [Inert]
const Routes = [Hello, Images, ReactUrls, Scripts]

server.connection(ConnectionSettings)
server.register(Plugins, handlePlugins)
server.route(Routes)
server.start(handleStart)

export default server
