export const getUserData = (client, hash, username, cb) => {
  client.hget(hash, username, (err, reply) => {
    if (err) {
      throw err
    } else {
      cb(reply)
    }
  })
}

export const mentorSignUp = (client, data) => {
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
  return (client, menteeName, numRecords) => {
    return client.hgetAsync(hashName, menteeName)
      .then((result) => {
        let results
        if (result) {
          results = JSON.parse(result)
        } else {
          results = []
        }
        return Promise.resolve(results.slice(results.length - numRecords))
      })
  }
}

const insertNotes = (hashName) => {
  return (client, menteeName, noteObj) => {
    return client.hgetAsync(hashName, menteeName)
      .then((result) => {
        let notes
        try {
          notes = JSON.parse(result)
          notes.push(noteObj)
        } catch (e) {
          notes = [noteObj]
        } finally {
          return client.hsetAsync(hashName, menteeName, JSON.stringify(notes))
        }
      })
  }
}

export const getUserProfile = (client, userType, userName) => {
  return client.hgetAsync(userType, userName)
    .then((result) => {
      let results
      if (result) {
        results = JSON.parse(result)
      } else {
        results = {}
      }
      return Promise.resolve(results)
    })
}

export const getAllUserTypes = (client, userType) => {
  return client.hgetallAsync(userType)
    .then((result) => {
      let results
      if (result) {
        results = result
      } else {
        results = {}
      }
      return Promise.resolve(results)
    })
}

export const setUserProfile = (client, userType, userName, payload) => {
  const data = JSON.stringify(payload)
  return client.hsetAsync(userType, userName, data)
}

export const getMenteeNotes = getNotes('notes:postchat')
export const insertMenteeNotes = insertNotes('notes:postchat')
export const getPrechatNotes = getNotes('notes:prechat')
export const insertPrechatNotes = insertNotes('notes:prechat')
export const getMentorFeedback = getNotes('notes:feedback')
export const insertMentorFeedback = insertNotes('notes:feedback')
