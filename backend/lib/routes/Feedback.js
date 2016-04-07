export default {
  path: '/feedback',
  method: 'POST',
  handler: (request, reply) => {
    console.log(request.url)
    reply('feedback')
  }
}
