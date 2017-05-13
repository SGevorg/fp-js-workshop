var fileLoader = require('../read-file/with-future');
var IO = require('ramda-fantasy').IO;

var FILE_LOCATION = '../../data/my-file.txt';

// combine operations on data using io monad.
// add more complexity without changing the existing code
// Some may consider this a somewhat artificial demonstration.



// start with the fileName
var fileNameIO = IO(() => FILE_LOCATION)
// compose with the file loader
var readFile = fileName => IO(() => fileLoader.load(fileName))
// compose with the uppercase function
var makeUpperCase = future => IO(() =>
                               future.bimap(err => err, data =>
                                            data.toUpperCase()));

// compose with the outputting functions
var stdoutWrite = future => IO(() => future.fork(err => console.log(err), data => console.log(data)));

// the actual composition 
var ioOperations = fileNameIO.chain(readFile).chain(makeUpperCase).chain(stdoutWrite)

// run the operations
ioOperations.runIO();
