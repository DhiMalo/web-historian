var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "text/html"
};




exports.serveAssets = function(response, asset, callback) {
  


  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
};

exports.receiveData = function (request, response) {
  var data = '';
  request.on('data', function (chunk) {
    data += chunk;
    console.log('Currently receiving data:', data);
  });
  request.on('end', function() {
    console.log('at end, we have received this data:', data);
    return data;
  });
};
// As you progress, keep thinking about what helper functions you can put here!

