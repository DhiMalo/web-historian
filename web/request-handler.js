var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var helpers = require('./http-helpers.js');
// require more modules/folders here!


exports.handleRequest = function (request, response) {

  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('/Users/student/Desktop/2015-10-web-historian/web/public/index.html', function (err, data) { //if not in same folder, make sure to use ..
      response.writeHead(200, headers);
      //response.write(data);
      response.end(data);
  });
  
  

  } else if (request.method === 'GET'){
    //if previously archived...
    //else if not in archive
      //then downloadURLS (see archive-helpers);
    
  } else if (request.method === 'POST'){
    
    //
  }

  //response.end(archive.paths.list);
};

