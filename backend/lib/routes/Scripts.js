import path from 'path'

export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (response, reply) => {
    reply.file(path.join(__dirname, '..', '..', '..', 'public', response.path))
  }
}
