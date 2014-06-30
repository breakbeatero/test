// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();








app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.send('Servidor corriendo en NodeJS en el puerto ' + process.env.PORT);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});


var uri = 'mongodb://breakbeatero:djjuanmy1@ds049219.mongolab.com:49219/breakbeatero';



var mongodb = require('mongodb');
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb'; 

mongodb.MongoClient.connect(uri, function (err, db) {
	res.send('conectado');
});