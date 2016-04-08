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

const getNotes = (hashName) => {
  return (menteeName, numRecords) => {
    return client.hgetAsync(hashName, menteeName)
      .then((result) => {
        const results = JSON.parse(result)
        return Promise.resolve(results.slice(results.length - numRecords))
      })
  }
}

const insertNotes = (hashName) => {
  return (menteeName, noteObj) => {
    return client.hgetAsync(hashName, menteeName)
      .then((result) => {
        const notes = JSON.parse(result)
        notes.push(noteObj)
        return client.hsetAsync(hashName, menteeName, JSON.stringify(notes))
      })
  }
}

export const getMenteeNotes = getNotes('menteenotes')
export const insertMenteeNotes = insertNotes('menteenotes')
export const getPrechatNotes = getNotes('prechatnotes')
export const insertPrechatNotes = insertNotes('menteenotes')
