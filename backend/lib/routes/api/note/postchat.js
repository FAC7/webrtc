import {
  getMenteeNotes,
  insertMenteeNotes
} from '../../../redis/redisFunctions.js'

export default (client, req, reply) => {
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
