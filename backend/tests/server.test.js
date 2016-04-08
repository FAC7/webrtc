const tape = require('wrapping-tape')
const setupServer = require('../dist/server.js').default
const client = require('../dist/redis/client.js').default()

var server = setupServer(client)

const blankTests = tape({
  setup: (t) => {
    client.flushdb()
    t.end()
  },
  teardown: (t) => {
    client.flushdb()
    t.end()
  }
})

blankTests('Check index status', (t) => {
  server.inject({
    method: 'GET',
    url: '/'
  }, (res) => {
    t.equal(res.statusCode, 200, 'Assert status code is 200')
    t.end()
  })
})

blankTests('Get ', (t) => {
  server.inject({
    method: 'GET',
    url: '/api/note/prechat/john',
  }, (res) => {
    t.equal(res.statusCode, 200, 'Assert status code is 200')
    t.deepEqual(res.result, {data: [], success: true}, 'Assert empty array')
    t.end()
  })
})

const prechatTests = tape({
  setup: (t) => {
    client.flushdb()
    t.end()
  },
  teardown: (t) => {
    client.flushdb()
    t.end()
  }
})

prechatTests('Test setting prechats', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/note/prechat/john',
    payload: {
      menteeName: 'john',
      mentorName: 'jim',
      note: 'foo',
      date: '1980/12/10'
    }
  }, (res) => {
    t.deepEqual(res.result, {data: 1, success: true}, 'Assert success')
    t.end()
  })
})

prechatTests('Test getting prechats', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/note/prechat/john',
    payload: {
      menteeName: 'john',
      mentorName: 'jim',
      note: 'foo',
      date: '1980/12/10'
    }
  }, () => {
    server.inject({method: 'GET', url: '/api/note/prechat/john'}, (res) => {
      t.deepEqual(res.result, {data: [{
        menteeName: 'john',
        mentorName: 'jim',
        note: 'foo',
        date: '1980/12/10'
      }], success: true}, 'Assert success')
      t.end()
    })
  })
})

tape({
  setup: (t) => t.end(),
  teardown: (t) => t.end()
})('Final teardown', (t) => {
  client.end(true)
  t.end()
})
