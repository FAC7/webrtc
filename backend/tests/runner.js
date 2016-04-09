require('./server.test.js')
require('./redisFunctions.test.js')

// example useage of ipcAddUser
// const IPCAddUser = require('../dist/redis/ipcAddUser').default;
// require('env2')('config.env');
//
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
//
// IPCAddUser('des-des5', 'eoin mccarthy').then((userData) => {
//   console.log('new IPC user created');
//   console.log(userData);
// }).catch(err => {
//   console.log('failed with err');
//   console.log(err);
// });
