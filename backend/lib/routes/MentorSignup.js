export default {
  path: '/mentorsignup',
  method: 'POST',
  handler: (request, reply) => {
    console.log(request.url)
    reply('mentorsignup')
  }
}
