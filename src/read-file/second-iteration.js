var fileLoader = module.exports = {}

var fs = require('fs')

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
