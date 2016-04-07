import client from './client.js'
import Bluebird from 'bluebird'

client.lpush = Bluebird.promisify(client.lpush)
client.lrange = Bluebird.promisify(client.lrange)

// these are some dummy functions
// make sure to delete these if you're done using them
export const getUserData = (hash, username) => {
  return client.hget(hash)
}

export const getDummyData = () => {
  return client.lrange('myList', 0, -1)
}
