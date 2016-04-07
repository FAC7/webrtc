export default {
  path: '/notes',
  method: 'POST',
  handler: (request, reply) => {
    console.log(request.url)
    reply('notes')
  }
}
