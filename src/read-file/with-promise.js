var fileLoader = module.exports = {}

var fs = require('fs')

// load the file with promise
// promises don't hold the operation, they immediately load
fileLoader.load = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data.split('\n'));
    });
  });
}
