var http = require("http");
fs = require('fs');
const PORT = process.env.PORT||8080;
http.createServer(function(request, response) {
  // send http header
  //http status: 200 : OK
  // Content Type: text/html
  response.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin' : '*'
      });

      var readStream = fs.createReadStream( 'index.html').pipe(res)

      readStream.pipe(response);
}).listen(PORT);

console.log('Server running at http://127.0.0.1:' + PORT);
