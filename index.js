


var FILE_LOCATION = './src/read-file/my-file.txt';

/* 

  Things we care about.

  1. Load the file successfully
  2. Handle the loading error if unsuccessful
 
*/


// V1. load with callbacks, and so on and so forth

// var fileLoader = require('./src/read-file/first-iteration')

/* fileLoader.load(FILE_LOCATION, function (data) {
 *   for (var i = 0; i < data.length; i++) {
 *     console.log(data[i]);
 *   }
 * });
 * 
 * 
 * fileLoader.load(FILE_LOCATION, function (data) {
 *   data.forEach(function (data) {
 *     console.log(data)
 *   });
 * });*/


/* fileLoader.load('/no/such/file/exists', function (data) {
 *   console.log(data)
 * });
 */


// V2 load with promises

// var fileLoader = require('./src/read-file/second-iteration')

// fileLoader.load(FILE_LOCATION).then(function (data) {
//   data.forEach(function (d) { console.log(d); });
// });

// fileLoader.load('/some/weird/location')
//           .then(function (data) {
//             console.log(data)
//           })
//           .catch(function (err) {
//             console.log(err)
//           });


// V3 load with future

var fileLoader = require('./src/read-file/future-impl')

fileLoader.load(FILE_LOCATION).fork(err => console.log(err), data => console.log(data))
