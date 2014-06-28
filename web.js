/*********************************************************************/

var restify = require('restify');
var mongojs = require('mongojs');

var ip_addr = '127.0.0.1';

var port = '3000';

var server = restify.createServer({name:"test"});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.authorizationParser());

server.use(function autenticate(req,res,next){
	if (req.authorization.basic) {
		if(req.authorization.basic.username =='juan' &&
			req.authorization.basic.password == '1234'){
			return next();

		}

	}
	return next(new restify.NotAuthorizedError());


})

var connection_string = '127.0.0.1:27017/prueba'
var db = mongojs(connection_string,['prueba']);
var songs= db.collection("songs");

function allSongs(req, res, next){
	res.setHeader("Acces-Control-Allow-Origin","*");
	songs.find().sort({postedOn:-1}, function(err, success){
		if (success){
			res.send(200,success);
			return next();
		}else{
			return next(err);
		}
	})
}

function postSong(req, res, next){
	res.setHeader("Acces-Control-Allow-Origin","*");
	var song = {};
	song.titulo = req.params.titulo;
	song.duration = req.params.duration;
	song.postedOn = new Date();

	songs.save(song,function(err, success){
		if (success){
			res.send(201,song);
			return next();
		}else{
			return next(err);
		}
	})
}

function deleteSong(req, res, next){
	res.setHeader("Acces-Control-Allow-Origin","*");
	songs.remove({_id:mongojs.ObjectId(req.params.songId)}, function(err, success){
		if (success){
			res.send(204,song);
			console.log("OK");
			return next();
		}else{
			console.log("X");
			return next(err);
		}
	})
}


function findSongById(req, res, next){
	res.setHeader("Acces-Control-Allow-Origin","*");

	

	songs.findOne({_id:mongojs.ObjectId(req.params.songId)}, function(err, success){
		if (success){
			console.log('Response success: ' + success)
			res.send(200, success);
			
			return next();
		}else{
			console.log('Response err: ' + err)
			return next(err);
		}
	})
}

function updateSong(req, res, next){
	res.setHeader("Acces-Control-Allow-Origin","*");

	var song = {};
	song.titulo = req.params.titulo;
	song.duration = req.params.duration;
	song.postedOn = new Date();

	songs.update({_id:mongojs.ObjectId(req.params.songId)}, {$set:song}, function(err, success){
		if (success){
			res.send(201, song);
			console.log("OK");
			return next();
		}else{
			console.log("X");
			return next(err);
		}
	})
}

var PATH='/songs';
server.get({path: PATH}, allSongs)
server.post({path: PATH}, postSong)
server.get({path: PATH + '/:songId'}, findSongById)
server.del({path: PATH + '/:songId'}, deleteSong)
server.put({path: PATH + '/:songId'}, updateSong)


server.listen(port, ip_addr,function(){
	console.log("%s escuchando en el puerto %s",server.name, server.url);
})