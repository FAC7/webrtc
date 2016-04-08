process.env.REDIS_DB = 1

const tape = require('wrapping-tape')
const redis = require('redis')
const bluebird = require('bluebird')
const db = require('../dist/redis/redisFunctions.js')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const DB_URL = process.env.REDIS_URL || 'redis://localhost:6379'
const DB_NUM = process.env.REDIS_DB || 1
var client = []

const test = tape({
  setup: (t) => {
    client = redis.createClient(DB_URL)
    client.select(DB_NUM, () => {
      client.flushdb()
    })
    t.end()
  },
  teardown: (t) => {
    client.flushdb()
    client.quit()
    t.end()
  }
})

test('Can insert mentee notes', (t) => {
  db.insertMenteeNotes(client, 'john', {
    menteeName: 'john',
    mentorName: 'sally',
    note: 'Some stuff',
    date: '2016/04/01'
  }).then(() => {
    return client.hgetAsync('menteenotes', 'john')
  }).then((results) => {
    t.deepEqual(results, JSON.stringify([{
      menteeName: 'john',
      mentorName: 'sally',
      note: 'Some stuff',
      date: '2016/04/01'
    }]))
    t.end()
  })
})

test('Can insert prechat notes', (t) => {
  db.insertPrechatNotes(client, 'john', {
    menteeName: 'john',
    mentorName: 'sally',
    note: 'Some stuff',
    date: '2016/04/01'
  }).then(() => {
    return client.hgetAsync('prechatnotes', 'john')
  }).then((results) => {
    t.deepEqual(results, JSON.stringify([{
      menteeName: 'john',
      mentorName: 'sally',
      note: 'Some stuff',
      date: '2016/04/01'
    }]))
    t.end()
  })
})

test('Can get mentee notes', (t) => {
  db.insertMenteeNotes(client, 'john', {
    menteeName: 'john',
    mentorName: 'sally',
    note: 'Some stuff',
    date: '2016/04/01'
  }).then(() => {
    return db.getMenteeNotes(client, 'john')
  }).then((results) => {
    t.deepEqual(results, [{
      menteeName: 'john',
      mentorName: 'sally',
      note: 'Some stuff',
      date: '2016/04/01'
    }])
    t.end()
  })
})

test('Can get prechat notes', (t) => {
  db.insertPrechatNotes(client, 'john', {
    menteeName: 'john',
    mentorName: 'sally',
    note: 'Some stuff',
    date: '2016/04/01'
  }).then(() => {
    return db.getPrechatNotes(client, 'john')
  }).then((results) => {
    t.deepEqual(results, [{
      menteeName: 'john',
      mentorName: 'sally',
      note: 'Some stuff',
      date: '2016/04/01'
    }])
    t.end()
  })
})
