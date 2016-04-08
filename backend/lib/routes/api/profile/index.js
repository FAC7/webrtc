export default (client) => {
  return {
    path: '/api/profile/{userType}/{username*}',
    method: ['GET', 'POST'],
    handler: (req, reply) => {
      reply(req.method)
    }
  }
}
