export default {
  path: '/mentee-signup',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request.url)
    reply('mentee-signup')
  }
}
