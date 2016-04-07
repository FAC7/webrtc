import client from './client.js'
import bluebird from 'bluebird'

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

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


export const getMenteeNotes = (menteeName) => {
    client.hgetAsync('menteenotes', menteeName).then((data) => {
      const parsedData = JSON.parse(data)
    }).catch()
}

export const insertMenteeNotes = (menteeName, notes) => {
  return new Promise((resolve, reject) => {
    client.hset('menteenotes', notes)
  })
}
