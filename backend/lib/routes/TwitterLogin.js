require('env2')('config.env')

export default {
  method: ['GET', 'POST'],
  path: '/auth/{mode}/{usertype}',
  config: {
    auth: 'twitter',
    handler: () => {
    }
  }
}
