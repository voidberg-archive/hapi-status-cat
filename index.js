var cats = require('./cats');

exports.register = function (server, options, next) {
  server.ext('onPreResponse', function (request, reply) {
    if (request.response.statusCode in cats) {
      request.response.headers['X-Status-Cat'] = cats[request.response.statusCode];
    }
    return reply.continue();
  });
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};