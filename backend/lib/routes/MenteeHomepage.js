export default {
  path: '/menteehomepage',
  method: 'GET',
  config: {
    auth: 'session',
    handler: (request, reply) => {
      console.log('menteehomepage')
      reply({
        username: {
          apiId: 'mentor-1',
          age: 26,
          gender: 'female',
          profession: 'teacher',
          topics: ['teaching', 'coding', 'javascript', 'halo'],
          aboutMe: 'I\'m the best around, nothings ever gonna bring me down.'
        }
      })
    }
  }
}
