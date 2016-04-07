export default {
  path: '/getmentordeets',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request.url)
    reply('getmentordeets')
  }
}
