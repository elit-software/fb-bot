var botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(function (request) {
  return 'Hello world!';
}, {platforms: ['facebook']});
