var fs = require('fs');
var buffer = fs.readFileSync('content.txt');
console.log(buffer.toString());
fs.readFile('content.txt', function(err, data) {
	if(err) {
		console.error(err);
	} else{
		console.log(data);
	}
});
fs.readFile('content.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});