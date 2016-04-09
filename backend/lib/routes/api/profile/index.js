export default (client) => {
  return {
    path: '/api/profile/{userType}/{username*}',
    method: ['GET', 'POST'],
    handler: (req, reply) => {
      console.log(client.connected)
      reply(req.method)
    }
  }
}
