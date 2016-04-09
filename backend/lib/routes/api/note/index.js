import prechatHandler from './prechat.js'
import postchatHandler from './postchat.js'
import feedbackHandler from './feedback.js'

export default (client) => {
  return {
    path: '/api/note/{noteType}/{userName}',
    method: ['GET', 'POST'],
    handler: (req, reply) => {
      console.log('going to note handler')
      if (req.method.toUpperCase() === 'POST' &&
          ! validateNoteObject(req.payload)) {
        return reply({success: false, data: 'invalid payload'})
      }

      const noteType = req.params.noteType

      if (noteType === 'prechat') {
        prechatHandler(client, req, reply)
      } else if (noteType === 'postchat') {
        postchatHandler(client, req, reply)
      } else if (noteType === 'feedback') {
        feedbackHandler(client, req, reply)
      } else {
        return reply({success: false, data: 'invalid note-type'})
      }
    }
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
