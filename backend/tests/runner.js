// require('./server.test.js')
// require('./redisFunctions.test.js')

import tape from 'tape';
import IPCAddUser from '../lib/redis/IPCAddUser';

IPCAddUser('des-des', 'eoin mccarthy').then((userData) => {
  console.log('new IPC user created');
  console.log(data);
}).catch(err => {
  console.log('failed with err');
  console.log(err);
  console.log(JSON.stringify(err));
});
