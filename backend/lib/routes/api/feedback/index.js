import {
  getMentorFeedback,
  insertMentorFeedback
} from '../../../redis/redisFunctions.js'

export default (client) => {
  return {
    path: '/api/feedback/{mentorName}',
    method: ['GET', 'POST'],
    handler: (req, reply) => {
      if (req.method === 'POST' &&
      ! validateFeedbackObject(req.payload)) {
        return reply({success: false, data: 'invalid payload'})
      }

      if (req.method.toUpperCase() === 'GET') {
        const numRecords = req.url.query.n ? req.url.query.n : 5
        getMentorFeedback(client, req.params.mentorName, numRecords)
          .then((results) => {
            reply({success: true, data: results})
          })
          .catch((error) => {
            reply({success: false, data: error})
          })
      } else if (req.method.toUpperCase() === 'POST') {
        insertMentorFeedback(client, req.params.mentorName, req.payload)
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
  }
}
function validateFeedbackObject (feedbackObj) {
  const expectedKeys = {
    menteeName: 'string',
    mentorName: 'string',
    date: 'string',
    note: 'string'
  }

  return Object.keys(feedbackObj).reduce((acc, key) => {
    return acc && key in expectedKeys && typeof feedbackObj[key] === expectedKeys[key]
  }, true)
}
