import db from '../redis/redisFunctions.js'

export default {
  path: '/notes/{noteType}/{menteeName}',
  method: ['GET', 'POST'],
  handler: (request, reply) => {
    if (! validateNoteObject(request.payload)) {
      return reply({success: false, data: 'invalid payload'})
    }

    const noteType = request.params.noteType

    if (noteType === 'prechat') {
      prechatHandler(request, reply)
    } else if (noteType === 'postchat') {
      postchatHandler(request, reply)
    } else {
      return reply({success: false, data: 'invalid note-type'})
    }
  }
}

function feedbackHandler () {

}

function prechatHandler () {
  if (req.method === 'GET') {
    const numRecords = (req.url.query.n) ? req.url.query.n : 1

    db.getPrechatNotes(request.params.menteename, numRecords)
      .then((results) => {
        reply({success: true, data: results})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else if (req.method === 'POST') {
    db.insertPrechatNotes(request.params.menteename, noteData)
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
    const numRecords = (req.url.query.n) ? req.url.query.n : 1

    db.getMenteeNotes(request.params.menteename, numRecords)
      .then((results) => {
        reply({success: true, data: results})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else if (req.method === 'POST') {
    db.insertMenteeNotes(request.params.menteename, noteData)
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
    'menteeName': 'string',
    'mentorName': 'string',
    'date': 'string',
    'note': 'string'
  }

  return Object.keys(noteObj).reduce((acc, key) => {
    return acc && (key in expectedKeys) && (typeof noteObj[key] === expectedKeys[key])
  }, true)
}
