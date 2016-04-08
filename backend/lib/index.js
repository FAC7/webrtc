import setupServer from './server.js'
import client from './redis/client.js'
import {handleStart} from './helpers/server-helpers.js'

const server = setupServer(client)

server.start(handleStart(server))
