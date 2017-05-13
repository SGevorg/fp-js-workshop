var fileLoader = require('../read-file/with-callbacks')

var FILE_LOCATION = '../../data/my-file.txt';

// Demonstration of an asynchronous operation
// can be done using callbacks

fileLoader.load(FILE_LOCATION, function (data) {
  // with good old loop
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});


fileLoader.load(FILE_LOCATION, function (data) {
  // with HIGHER ORDER FUNCTIONS
  data.forEach(function (data) {
    console.log(data)
  });
});


fileLoader.load('/no/such/file/exists', function (data) {
  // this callback should have access to error so THIS IS NOT GOOD 
  console.log(data)
});
