var system = require('system');
var webpage = require('webpage');
var address = system.args[1];
var page = webpage.create();
page.open(address, function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});