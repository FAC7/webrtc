import {
  getMenteeNotes,
  insertMenteeNotes,
  getPrechatNotes,
  insertPrechatNotes
} from '../redis/redisFunctions.js'

import client from '../redis/client.js'

export default {
  path: '/notes/{noteType}/{menteeName}',
  method: ['GET', 'POST'],
  handler: (req, reply) => {
    if (req.method.toUpperCase() === 'POST' &&
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

function prechatHandler (req, reply) {
  if (req.method.toUpperCase() === 'GET') {
    const numRecords = req.url.query.n ? req.url.query.n : 1
    getPrechatNotes(client, req.params.menteeName, numRecords)

      .then((results) => {
        reply({success: true, data: results})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })

  } else if (req.method.toUpperCase() === 'POST') {
    insertPrechatNotes(client, req.params.menteeName, req.payload)
      .then((success) => {
        reply({success: true, data: success})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else {
    reply({success: false, data: 'invalid request type'})
  }
}

function postchatHandler (req, reply) {
  if (req.method.toUpperCase() === 'GET') {
    const numRecords = req.url.query.n ? req.url.query.n : 1

    getMenteeNotes(client, req.params.menteeName, numRecords)
      .then((results) => {
        reply({success: true, data: results})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else if (req.method.toUpperCase() === 'POST') {
    insertMenteeNotes(client, req.params.menteeName, req.payload)
      .then((success) => {
        reply({success: true, data: success})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else {
    reply({success: false, data: 'invalid request type'})
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
