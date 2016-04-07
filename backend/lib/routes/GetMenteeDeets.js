export default {
  path: '/getmenteedeets',
  method: 'POST',
  handler: (request, reply) => {
    console.log(request.url)
    reply('getmenteedeets')
  }
}
