export default {
  path: '/getmenteedeets',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request.url)
    reply('getmenteedeets')
  }
}
