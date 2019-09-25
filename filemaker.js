var fs = require('fs');

fs.appendFile('madeinnode1.txt', 'I came, I saw, I conquered.\n', function(err){
	if(err) throw err;
	console.log('File made or content appended\n');
});
console.log('We do not need to create a server because we are dealing with OS file handling');
//console.log outside the appendfile function is displayed after the one outside in CMD