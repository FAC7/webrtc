import client from './client.js'

export const mentorSignUp = (data) => {
  const obj = {
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

export const getMenteeNotes = (menteeName, numRecords) => {
  return client.hgetAsync('menteenotes', menteeName)
    .then((result) => {
      const results = JSON.parse(result)
      return Promise.resolve(results.slice(results.length - numRecords))
    })
}

export const insertMenteeNotes = (menteeName, noteObj) => {
  return client.hgetAsync('menteenotes', menteeName)
    .then((result) => {
      const notes = JSON.parse(result)
      notes.push(noteObj)
      return client.hsetAsync('menteenotes', menteeName, JSON.stringify(notes))
    })
}

export const getPrechatNotes = (menteeName, numRecords) => {
  return client.hgetAsync('prechatnotes', menteeName)
  .then((result) => {
    const results = JSON.parse(result)
    return Promise.resolve(results.slice(results.length - numRecords))
  })
}

export const insertPrechatNotes = (menteeName, noteObj) => {
  return client.hgetAsync('prechatnotes', menteeName)
    .then((result) => {
      const notes = JSON.parse(result)
      notes.push(noteObj)
      return client.hsetAsync('prechatnotes', menteeName, JSON.stringify(notes))
    })
}
