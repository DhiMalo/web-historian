var fs = require('fs');
var path = require('path');
var _ = require('underscore');

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),  // iZOMBIE : "this path module allows us to replace paths like archives/sites/ with archivedSites (ie. could be useful in the https-helpers.js file.) 
  list: path.join(__dirname, '../archives/sites/sites.txt') 
}; // iZOMBIE: 'updated path assginment. 4:49PM'

// Used for tests, DO NOT MODIFY.
exports.initialize = function(pathsObj){ 
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  }); 
}; 

// Functions to suggest how to modularize code. Keep it clean!

exports.readListOfUrls = function(){
    // read ../archives/sites/sites.text 
      fs.readFile(paths.list, 'utf8', function(err, data){
      //push data into array
      var dataArray = data.toString.split('\n');
      console.log('dataSet, an array, is:', dataSet);
    });
};

exports.isUrlInList = function(err, data){
  var bool = false; 
  fs.appendFile(data, function(){

  });
    bool = true; //flip the bool to true
  // }  
  return bool; //returns a boolean
};

exports.addUrlToList = function(){
  //append url to sites.txt
};

//when user submits URL
exports.isUrlArchived = function(targetURL){
  // var bool = false 
  readListOfUrls;

  //if targetURL url in list?
    //list of urls 

      //if not, add the url'
  //returns a boolean

};

exports.downloadUrls = function(dataURL){
  fs.writeFile('')
};



//NOTE: 
//this could be useful:
//fs.watchFile(filename[, options], listener)#

// Watch for changes on filename. The callback listener will be called each time the file is accessed.

// The options argument may be omitted. If provided, it should be an object. The options object may contain a boolean named persistent that indicates whether the process should continue to run as long as files are being watched. The options object may specify an interval property indicating how often the target should be polled in milliseconds. The default is { persistent: true, interval: 5007 }.







