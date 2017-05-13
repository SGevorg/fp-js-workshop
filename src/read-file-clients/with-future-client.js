var fileLoader = require('../read-file/with-future')

var FILE_LOCATION = '../../data/my-file.txt';

// Loads the file using future.
// The difference between future and promise is when the functions are executed
// For promise, the function compositions get executed straight away
// For future nothing will be executed until fork is called

fileLoader
  .load(FILE_LOCATION)
  .fork(err => console.log(err), data => console.log(data))

fileLoader
  .load('/location/that/no/exists')
  .fork(err => console.log(err), data => console.log(data))
