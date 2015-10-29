var fs = require('fs');

// Sync is ok here because this is called just once on startup.
module.exports = function () {
  // if the archive folder doesn't exist, create it.
  if (!fs.existsSync("./archives")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives");
  }

  // if the file doesn't exist, create it.
  if (!fs.existsSync("./archives/sites.txt")) {
    // We use fs.openSync to create the file
    var file = fs.openSync("./archives/sites.txt", "w");
    fs.closeSync(file);
  }

  // if the folder doesn't exist, create it.
  if (!fs.existsSync("./archives/sites")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives/sites");
  }
};


//From http://www.sitepoint.com/accessing-the-file-system-in-node-js/:
//"the exists() function determines if the file “foo.txt” exists.":
//code snippet: var fs = require("fs");
// var fileName = "foo.txt";

// fs.exists(fileName, function(exists) {
//   if (exists) {...