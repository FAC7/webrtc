export default {
  path: '/mentorhomepage',
  method: 'POST',
  handler: (request, reply) => {
    console.log(request.url)
    reply('mentorhomepage')
  }
}
