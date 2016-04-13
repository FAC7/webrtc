import http from 'https'

const makeRequest = (options, cb) => {
  const request = http.request(options, (response) => {
    let body = ''
    response.on('data', (chunk) => {
      body += chunk
    })
    response.on('end', () => {
      cb(null, body)
    })
  })
  request.on('error', (err) => {
    console.error('request to ' + options.host + ' failed!')
    cb(err)
  })
  request.write(options.body)
  request.end()
}

export default {
  path: '/text',
  method: 'GET',
  handler: (request, reply) => {
    var options = {
      path: '/restcomm/2012-04-24/Accounts/' + process.env.TELESTAX_AUTH + '/SMS/Messages',
      method: 'POST',
      body: 'To=%2B447985156114&From=1234&Body=You have a mentoring session scheduled for today',
      headers: { // eslint-disable-line
        Authorization: process.env.TELESTAX_TOKEN,
        To: '+447985156114',
        From: '1234',
        Body: 'hi',
        'Content-Type': 'application/x-www-form-urlencoded' // eslint-disable-line
      },
      host: 'tadhack.restcomm.com',
      port: 443
    }
    makeRequest(options, (err, response) => {
      if (err) {
        console.log('ERROR: ', err)
      }
      reply(response)
    })
  }
}
