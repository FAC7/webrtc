export default {
  path: '/mentorhomepage',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request.url)
    reply('mentorhomepage')
  }
}
