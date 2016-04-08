import server from './server.js'
import {handleStart} from './helpers/server-helpers.js'

server.start(handleStart(server))
