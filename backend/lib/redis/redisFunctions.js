import client from './client.js'
import Bluebird from 'bluebird'

client.lpush = Bluebird.promisify(client.lpush)
client.lrange = Bluebird.promisify(client.lrange)

// these are some dummy functions
// make sure to delete these if you're done using them
export const mentorSignUp = (data) => {
  let obj = data[Object.keys(data)[0]]
  console.log(obj);

  client.hmset('mentors', Object.keys(data)[0], JSON.stringify(obj))
}

export const getUserData = (hash, username) => {
  return client.hget(hash)
}



export const getDummyData = () => {
  return client.lrange('myList', 0, -1)
}



//
//  Mentors: { username: {
//     apiId: 'mentor-1',
//     apiPassword: 'mentor1234',
//     age: num,
//     firstName: string,
//     lastName: string,
//     gender: string,
//     profession: string,
//     topics: [strings],
//     aboutme: string,
//     feedback: [{date: num,
//                 mentee: string,
//                 content: string}],
//     timeSpentMentoring: num }, ...
// }
