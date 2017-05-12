var fileLoader = module.exports = {}

var fs = require('fs')
var Future = require('ramda-fantasy').Future;

fileLoader.load = filePath => 
    Future((reject, resolve) =>
           fs.readFile(filePath,
                       'utf8',
                       (err, data) =>
                       err ? reject(err) : resolve(data)))

