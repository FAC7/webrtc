import client from './client.js'
import Bluebird from 'bluebird'

client.lpush = Bluebird.promisify(client.lpush)
client.lrange = Bluebird.promisify(client.lrange)

// these are some dummy functions
// make sure to delete these if you're done using them
export const mentorSignUp = (data) => {
  let obj = {
    mentorUsername: data.mentorUsername,
    name: data.name,
    age: data.age,
    gender: data.gender,
    // 'specialities', data.specialities.toString(),
    background: data.background,
    status: data.status
  }

  client.hmset('mentors', data.mentorUsername, JSON.stringify(obj))
}

export const getUserData = (hash, username) => {
  return client.hget(hash)
}

export const getAllMentors = (cb) => {
  client.hgetall('mentors', (err, reply) => {
    if (err) {
      console.log('error in getAllMentors', err)
    } else {
      const mentorArray = Object.keys(reply).map((key) => {
        return reply[key]
      })
      cb(JSON.stringify(mentorArray))
    }
  })
}


export const getDummyData = () => {
  return client.lrange('myList', 0, -1)
}
