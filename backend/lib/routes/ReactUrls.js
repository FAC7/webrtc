import path from 'path'

export default {
  path: '/{param*}',
  method: 'GET',
  handler: (response, reply) => {
    reply.file(path.join(__dirname, 'public', 'index.html'))
  }
}
