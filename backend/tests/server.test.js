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

blankTests('Get empty data', (t) => {
  server.inject({
    method: 'GET',
    url: '/api/note/prechat/john',
  }, (res) => {
    t.equal(res.statusCode, 200, 'Assert status code is 200')
    t.deepEqual(res.result, {data: [], success: true}, 'Assert empty array')
    t.end()
  })
})

const apiTests = tape({
  setup: (t) => {
    client.flushdb()
    t.end()
  },
  teardown: (t) => {
    client.flushdb()
    t.end()
  }
})

apiTests('Test setting prechats', (t) => {
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

apiTests('Test getting prechats', (t) => {
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

apiTests('Test setting postchats', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/note/postchat/sally',
    payload: {
      menteeName: 'sally',
      mentorName: 'phill',
      note: 'bar',
      date: '2016/06/20'
    }
  }, (res) => {
    t.deepEqual(res.result, {data: 1, success: true}, 'Assert success')
    t.end()
  })
})

apiTests('Test getting postchats', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/note/postchat/sally',
    payload: {
      menteeName: 'sally',
      mentorName: 'phill',
      note: 'bar',
      date: '2016/06/20'
    }
  }, () => {
    server.inject({method: 'GET', url: '/api/note/postchat/sally'}, (res) => {
      t.deepEqual(res.result, {success: true, data: [{
        menteeName: 'sally',
        mentorName: 'phill',
        note: 'bar',
        date: '2016/06/20'
      }]})
      t.end()
    })
  })
})

apiTests('Test posting feedback', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/note/feedback/kelly',
    payload: {
      menteeName: 'jimbob',
      mentorName: 'kelly',
      note: 'fam',
      date: '2016/06/20'
    }
  }, (res) => {
    t.deepEqual(res.result, {data: 1, success: true}, 'Assert success')
    t.end()
  })
})

apiTests('Test getting feedback', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/note/feedback/kelly',
    payload: {
      menteeName: 'jimbob',
      mentorName: 'kelly',
      note: 'fam',
      date: '2016/06/20'
    }
  }, () => {
    server.inject({method: 'GET', url: '/api/note/feedback/kelly'}, (res) => {
      t.deepEqual(res.result, {data: [{
        menteeName: 'jimbob',
        mentorName: 'kelly',
        note: 'fam',
        date: '2016/06/20'
      }], success: true}, 'Assert success')
      t.end()
    })
  })
})

apiTests('Test getting multiple notes', (t) => {
  server.inject({
    method: 'POST',
    url: '/api/note/postchat/kelly',
    payload: {
      menteeName: 'jimbob',
      mentorName: 'kelly',
      note: 'fam',
      date: '2016/06/20'
    }
  }, (res_) => {
    t.deepEqual(res_.result, {data: 1, success: true}, 'Assert success')
    server.inject({
      method: 'POST',
      url: '/api/note/postchat/kelly',
      payload: {
        menteeName: 'phill',
        mentorName: 'kelly',
        note: 'fam',
        date: '2016/06/20'
      }
    }, (res0) => {
      t.deepEqual(res0.result, {data: 0, success: true}, 'Assert success')
      server.inject({method: 'GET', url: '/api/note/postchat/kelly?n=2'}, (res1) => {
        t.deepEqual(res1.result, {data: [{
          menteeName: 'jimbob',
          mentorName: 'kelly',
          note: 'fam',
          date: '2016/06/20'
        }, {
          menteeName: 'phill',
          mentorName: 'kelly',
          note: 'fam',
          date: '2016/06/20'
        }], success: true}, 'Assert success')
        t.end()
      })
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
