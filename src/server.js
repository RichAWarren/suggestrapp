const Hapi = require('hapi');
const staticfile = require('./route/staticfile.js');
const login = require('./route/login.js');
const welcome = require('./route/welcome/index.js')
const userSuggestions = require('./route/dashboard/user-suggestions.js');
const Pool = require('pg').Pool;
const env = require('env2')

// Load environment variables

env('config.env')

// Create psql Pool

process.on('unhandledRejection', function(e) {
    console.log(e.message, e.stack)
})

// create the pool somewhere globally so its lifetime, lasts for as long as your app is running

var pool = new Pool(process.env.DATABASE_URL || 'postgres://Daniel@127.0.0.1/suggestrapp')

// create server
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
