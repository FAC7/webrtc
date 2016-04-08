const tape = require('tape')
const server = require('../dist/server.js')

tape('', (t) => {
  console.log('Server', server)
  server.inject({
    method: 'GET',
    url: '/'
  }, (res) => {
    t.equal(res.statusCode, 200, 'Assert status code is 200')
  })
})
