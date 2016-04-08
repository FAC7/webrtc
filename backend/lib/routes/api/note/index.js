import prechatHandler from './prechat.js'
import postchatHandler from './postchat.js'

export default {
  path: '/api/note/{noteType}/{menteeName}',
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
