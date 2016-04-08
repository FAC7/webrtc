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
  return client.hmgetAsync(userType, userName)
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

export const getMenteeNotes = getNotes('menteenotes')
export const insertMenteeNotes = insertNotes('menteenotes')
export const getPrechatNotes = getNotes('prechatnotes')
export const insertPrechatNotes = insertNotes('prechatnotes')
