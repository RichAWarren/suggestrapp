const Hapi = require('hapi');
const staticfile = require('./route/staticfile.js');
const login = require('./route/login.js');
const welcome = require('./route/welcome/index.js')
const userSuggestions = require('./route/dashboard/user-suggestions.js');

// Load environment variables
const env = require('env2')
env('config.env')

const server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 8000,
});

server.state('token', {
    isSameSite: false,
    isSecure: false,
    isHttpOnly: false
})

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route([staticfile, login, welcome, userSuggestions]);

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
