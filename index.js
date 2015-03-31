
var request = require('request-json');


module.exports = function (access_token) {

  var client = request.createClient('');

  client.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  client.headers['GData-Version'] = '2';
  client.headers['Authorization'] = 'Bearer' + ' ' + access_token;

  client.getFeed = function (url, callback) {

    if(url.lastIndexOf('alt=json') == -1) {
      if(url.lastIndexOf('?') > -1) {
        url += '&alt=json';
      } else {
        url += '?alt=json';
      }
    }

    client.get(url, function(err, res, body) {
      return callback(err, body);
    });

  };

  return client;
};
