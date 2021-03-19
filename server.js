var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;
var port = PORT;
app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});
app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'.PORT);
