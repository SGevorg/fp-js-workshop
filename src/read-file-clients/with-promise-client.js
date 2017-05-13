var fileLoader = require('../read-file/with-promise')

var FILE_LOCATION = '../../data/my-file.txt';


// V2 load with promises

// this is an improved promise implementation of the file load
// Promise is a type of a Monad (see the README)
// It allows to compose pure functions sequentially on data

fileLoader.load(FILE_LOCATION).then(function (data) {
  data.forEach(function (d) {
    // in some circles console.log is a side effect
    // so it's here for demonstration purposes.
    console.log(d);
  });
});

fileLoader
  .load('/some/inexistent/location')
  .then(function (data) {
    // This won't execute
    console.log(data)
  })
  .catch(function (err) {
    // this will execute
    console.log(err)
  });
