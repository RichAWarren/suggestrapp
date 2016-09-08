const Hapi = require('hapi');
const staticfile = require('./route/staticfile.js');
const login = require('./route/login.js');

// Load environment variables
const env = require('env2')
env('config.env')

const server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 8000,
});


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route([staticfile, login]);

});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
