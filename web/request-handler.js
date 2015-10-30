var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var helpers = require('./http-helpers.js');
// require more modules/folders here!


exports.handleRequest = function (request, response) {
  var status = status || 200;
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('/Users/student/Desktop/2015-10-web-historian/web/public/index.html', function (err, data) {
      response.writeHead(status, headers);
        response.end(data);
      });
  } else if (request.method === 'GET' && request.url !== '/') {
      // if(exports.isUrlArchived(request.url)){
      // }
    //if request.url is located in sites.txt 
      //use htmlfetcher to scrape the webpage
    //else if not in archive
      //then downloadURLS (see archive-helpers);
      response.writeHead(status, headers);
      response.end();
    } else if (request.method === 'POST'){
      var url = helpers.receiveData(request, response);
      console.log('this is the client-submitted url:', url);
      // exports.addUrlToList(request.url)
      response.writeHead(status, headers);
      response.end();
  
  }

  
};

