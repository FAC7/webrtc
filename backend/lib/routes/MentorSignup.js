export default {
  path: '/mentor-signup',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request.url)
    reply('mentor-signup')
  }
}
