if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod'); // production
} else {
    module.exports = require('./dev');  // development
}
