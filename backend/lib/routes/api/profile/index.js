export default {
  path: '/api/profile/{userType}/{username*}',
  method: ['GET', 'POST'],
  handler: (req, reply) => {
    reply(req.method)
  }
}
