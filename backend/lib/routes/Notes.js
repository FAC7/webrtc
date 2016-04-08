import db from '../redis/redisFunctions.js'

export default {
  path: '/notes/{noteType}/{menteeName}',
  method: ['GET', 'POST'],
  handler: (req, reply) => {
    if (req.method === 'POST' &&
    ! validateNoteObject(req.payload)) {
      return reply({success: false, data: 'invalid payload'})
    }

    const noteType = req.params.noteType

    if (noteType === 'prechat') {
      prechatHandler(req, reply)
    } else if (noteType === 'postchat') {
      postchatHandler(req, reply)
    } else {
      return reply({success: false, data: 'invalid note-type'})
    }
  }
}

function feedbackHandler () {

}

function prechatHandler (req, reply) {
  if (req.method === 'GET') {
    const numRecords = req.url.query.n ? req.url.query.n : 1

    db.getPrechatNotes(req.params.menteename, numRecords)
      .then((results) => {
        reply({success: true, data: results})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else if (req.method === 'POST') {
    db.insertPrechatNotes(req.params.menteename, req.payload)
      .then((success) => {
        reply({success: true, data: success})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else {
    reply({success: false})
  }
}

function postchatHandler (req, reply) {
  if (req.method === 'GET') {
    const numRecords = req.url.query.n ? req.url.query.n : 1

    db.getMenteeNotes(req.params.menteename, numRecords)
      .then((results) => {
        reply({success: true, data: results})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else if (req.method === 'POST') {
    db.insertMenteeNotes(req.params.menteename, req.payload)
      .then((success) => {
        reply({success: true, data: success})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else {
    reply({success: false})
  }
}

function validateNoteObject (noteObj) {
  const expectedKeys = {
    menteeName: 'string',
    mentorName: 'string',
    date: 'string',
    note: 'string'
  }

  return Object.keys(noteObj).reduce((acc, key) => {
    return acc && key in expectedKeys && typeof noteObj[key] === expectedKeys[key]
  }, true)
}
