import crypto from 'crypto';
import https from 'https';

// https://github.com/dwyl/hapi-auth-github/blob/master/lib/index.js#L102
const createPassword => () =>
  crypto.createHash('sha256').update(Math.random().toString()).digest('hex');

const IPCAddUser = function IPCAddUser(username, name) {
  return new Promise(function(resolve, reject) {
    const request = https.request({
      method: 'POST',
      host: process.env.IPC_HOST,
      path: '/rest/ops/create',
      data: ,
      contentType: "application/json",
      dataType: 'json'
    }, res => {
      const body ='';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const responseData = JSON.parse(body);
        if (responseData.result === 'success') {
          resolve(res);
        } else {
          reject(responseData);
        }
      })
    });
    request.on('error', err => reject(err));

    const requestData = JSON.stringify({
      auth: {
        type: "auth",
        key: process.env.IPC_KEY
      },
      type: "user",
      values: {
        uname: username,
        name: name,
        password: createPassword()
      }
    });

    request.write(requestData);
    request.end();
  });
};

export default IPCAddUser;
