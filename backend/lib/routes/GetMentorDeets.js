export default {
  path: '/getmentordeets',
  method: 'POST',
  handler: (request, reply) => {
    console.log(request.url)
    reply('getmentordeets')
  }
}
