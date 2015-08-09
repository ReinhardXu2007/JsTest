var fs = require('fs');
fs.readdir('./', function(err, list) {
	if(err) {
		console.error(err);
	} else{
		console.log(list);
	}
});
