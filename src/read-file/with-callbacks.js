var fileLoader = module.exports = {}

var fs = require('fs')

// Load the file with the given filename, callback
fileLoader.load = function (fileName, callback) {
  fs.readFile(fileName, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    callback(data.split('\n'))
  });
}
