var http = require("http");
var count = 0;
function onRequest(request, response) {
  count++;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World" + count);
  response.end();
}

http.createServer(onRequest).listen(8888);