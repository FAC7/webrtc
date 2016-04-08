export default {
  path: '/feedback/{username}',
  method: 'post',
  handler: (request, reply) => {
    console.log(request.params.username)
    console.log(request.payload)
    reply(request.payload)
  }
}
