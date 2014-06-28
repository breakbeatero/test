// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
<<<<<<< HEAD
  res.send('Holaaaaa World!');
=======
  res.send('Hello World!');
>>>>>>> 364fa61c4ca40e2aaea79417eb9bd94b94d5e8ec
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});