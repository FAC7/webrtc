import crypto from 'crypto' // eslint-disable-line
import https from 'https'

// https://github.com/dwyl/hapi-auth-github/blob/master/lib/index.js#L102
const createPassword = () =>
  crypto.createHash('sha256').update(Math.random().toString()).digest('hex')

const IPCAddUser = (username, name) => { // eslint-disable-line
  return new Promise((resolve, reject) => {
    const newUserData = {
      uname: username,
      name: name,
      password: createPassword()
    }

    const request = https.request({
      method: 'POST',
      host: process.env.IPC_HOST,
      path: '/rest/ops/create',
      headers: {
        'Content-Type': 'application/json',
      }
    }, res => {
      let body =''
      res.on('data', chunk => {
        body += chunk
      })
      res.on('end', () => {
        const responseData = JSON.parse(body)
        if (responseData.result === 'success') {
          resolve({responseData, newUserData})
        } else {
          reject(responseData)
        }
      })
    })
    request.on('error', err => {
      console.log('request failed')
      reject(err)
    })

    const requestData = JSON.stringify({
      auth: {
        type: 'auth',
        key: process.env.IPC_API_KEY
      },
      type: 'user',
      values: newUserData
    })

    request.write(requestData)
    request.end()
  })
}

export default IPCAddUser
