import {
  getMentorFeedback,
  insertMentorFeedback
} from '../../../redis/redisFunctions.js'

export default (client, req, reply) => {
  if (req.method.toUpperCase() === 'GET') {
    const numRecords = req.url.query.n ? req.url.query.n : 5
    getMentorFeedback(client, req.params.userName, numRecords)
      .then((results) => {
        reply({success: true, data: results})
      })
      .catch((error) => {
        reply({success: false, data: error})
      })
  } else if (req.method.toUpperCase() === 'POST') {
    insertMentorFeedback(client, req.params.userName, req.payload)
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
