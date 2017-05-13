var fileLoader = module.exports = {}

var fs = require('fs')
var Future = require('ramda-fantasy').Future;

// load the file using future.
// it will hold the operation until the fork is called

fileLoader.load = filePath => 
    Future((reject, resolve) =>
           fs.readFile(filePath,
                       'utf8',
                       (err, data) =>
                       err ? reject(err) : resolve(data)))

