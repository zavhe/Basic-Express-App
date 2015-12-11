var express = require('express'),
	path 	= require('path'),
	app 	= express(),
	fortune = require('./lib/fortune.js'),
	server;

	app.use(express.static(path.join(__dirname, 'public')));

	app.get('/', function (req, res) {
		res.render('index.jade', { title: 'zavhe | full-stack webdeveloper', logo_title: 'ZH', cookie: fortune.getFortune() });
	});

	app.get('/portfolio', function (req, res) {
		res.render('portfolio.jade', { title: 'zavhe | full-stack webdeveloper | portfolio', logo_title: 'ZH' });
	});

	app.use(function(req, res, next){
		res.status(404);
		res.render('404.jade', { solicited: req.url });
	});

	app.set('view engine', 'jade');

	server = app.listen(3000, function () {
		var host = server.address().address,
			port = server.address().port;

		console.log('Server Running at http://localhost:3000');
	});